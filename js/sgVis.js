/**
 * Star glyph visualization adapted from http://bl.ocks.org/kevinschaul/8833989
 * @type {number}
 */

var dataLength = 0;
var dataName = "";
var colorsOfAxes = ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"];

/**
 * Reconstruct the data array according to the given dimension ordering
 * @param dataArray
 * @param nc
 * @returns {Array}
 */
function reconstruct(dataArray, nc) {
    var newArr = [];
    for (var row = 0; row < dataArray.length; row++) {
        newArr.push(getRow(dataArray, nc, row));
    }
    console.log(nc);
    return newArr;
}

/**
 * Reconstruct a single row from data array according to the given dimension ordering
 * @param dataArray
 * @param nc
 * @param row
 * @returns {*[]}
 */
function getRow(dataArray, nc, row) {
    var newRow = [dataArray[row][0]];
    for (var i = 0; i < nc.length; i++) {
        newRow.push(dataArray[row][nc[i] + 1]);
    }
    return newRow;
}

/**
 * Visualize the dataset as star glyphs
 * @param file
 */
function sgVis(file) {
    dataName = file;
    var box = "#targetA_box";
    var margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    var width = 65 - margin.left - margin.right;

    var scale = d3.scale.linear()
        .domain([0, 1.0])
        .range([0, 1.0]);


    d3.csv(file)
        .get(function (error, rows) {

            var labels = Object.keys(rows[0]);
            var dataArr_origin = rows.map(Object.values);
            var dataArr;
            if (taskCount !== 0) {
                for (var i = 0; i < nc[taskCount - 1].length; i++) {
                    nc[taskCount - 1][i] = nc[taskCount - 1][i] - 1;
                }
                dataArr = reconstruct(dataArr_origin, nc[taskCount - 1]);
                console.log(nc);
            } else {
                dataArr = dataArr_origin;
            }
            dataArr.unshift(labels);

            var properties = getLabels(dataArr);

            var hasNullValue = [];
            // delete rows with null value(s)
            for (var a = 1; a < dataArr.length; a++) {
                for (var b = 0; b < dataArr[0].length; b++) {
                    if (dataArr[a][b] === "") {
                        hasNullValue.push(a);
                        break;
                    }
                }
            }
            var deleted = 0;
            for (var index = 0; index < hasNullValue.length; index++) {
                dataArr.splice(hasNullValue[index] - deleted, 1);
                deleted++;
            }

            //var visArr = deepCopy(getNomArr(dataArr));
            var visArr = deepCopy(dataArr);


            var newRows = convertToArrayOfObjects(visArr);
            dataLength = newRows.length;

            for (var l = dataLength; l <= 408; l++) {
                //$(box + l).style.display;
            }


            var star = d3.starPlot()
                .width(width)
                .properties(properties)
                .scales(scale)
                .margin(margin);

            newRows.forEach(function (d, i) {

                var wrapper = d3.select(box + i).append('div')
                    .attr("id", "data" + i)
                    .attr('class', 'wrapper');

                var svg = wrapper.append('svg')
                    .attr('class', 'chart')
                    .attr('width', width)
                    .attr('height', width)
                    .attr('transform', 'rotate(270 0 0)');

                var starG = svg.append('g')
                    .datum(d)
                    .call(star)
                    .call(star.interaction)

                var interaction = wrapper.selectAll('.interaction')
                    .style('display', 'none');

                svg.selectAll('.star-interaction')
                    .on('mouseover', function (d) {
                        svg.selectAll('.star-label')
                            .style('display', 'none')
                    })
                    .on('mouseout', function (d) {
                        interaction
                            .style('display', 'none')

                        svg.selectAll('.star-label')
                            .style('display', 'block')
                    })
            });
        });


    d3.starPlot = function () {
        var width = 200,
            margin = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },

            labelMargin = 0,
            includeGuidelines = true,
            includeLabels = true,
            properties = [],
            scales = [],
            title = nop,

            g,
            datum,
            radius = width / 2,
            origin = [radius, radius],
            radii = properties.length,
            radians = 2 * Math.PI / radii,
            scale = d3.scale.linear()
                .domain([0, 1.0])
                .range([0, radius]);

        function chart(selection) {
            datum = selection.datum();
            g = selection
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


            drawChart();

            if (includeGuidelines) {
                drawGuidelines();
            }


        }

        function drawGuidelines() {
            var r = 0;
            properties.forEach(function (d, i) {
                var l, x, y;
                var userScale = scales[i] || scales[0];
                var dataValue = scale(userScale(datum[d]));
                l = radius;
                x = dataValue * Math.cos(r);
                y = dataValue * Math.sin(r);
                g.append('line')
                    .attr('class', 'star-axis')
                    .attr('stroke', colorsOfAxes[i])
                    .attr('x1', origin[0])
                    .attr('y1', origin[1])
                    .attr('x2', origin[0] + x)
                    .attr('y2', origin[1] + y);

                r += radians;
            })
        }


        function drawChart() {
            g.append('circle')
                .attr('class', 'star-origin')
                .attr('cx', origin[0])
                .attr('cy', origin[1])
                .attr('r', 2);

            var path = d3.svg.line.radial()

            var pathData = [];
            var r = Math.PI / 2;
            properties.forEach(function (d, i) {
                var userScale = scales[i] || scales[0];
                pathData.push([
                    scale(userScale(datum[d])),
                    r
                ]);
                r += radians;
            });

            g.append('path')
                .attr('class', 'star-path')
                .attr('transform', 'translate(' + origin[0] + ',' + origin[1] + ')')
                .attr('d', path(pathData) + 'Z');

        }

        function drawInteraction() {
            var path = d3.svg.line.radial();

            // `*Interaction` variables are used to build the interaction layer.
            // `*Extent` variables are used to compute (and return) the x,y
            // positioning of the attribute extents. `*Value` variables are used
            // for the attribute values.
            var rInteraction = Math.PI / 2;
            var rExtent = 0;
            properties.forEach(function (d, i) {
                var lInteraction, xInteraction, yInteraction;
                var lExtent, xExtent, yExtent;

                lInteraction = radius;

                lExtent = radius + labelMargin;
                xExtent = lExtent * Math.cos(rExtent) + origin[0] + margin.left;
                yExtent = lExtent * Math.sin(rExtent) + origin[1] + margin.top;

                var userScale = scales[i] || scales[0];
                lValue = scale(userScale(datum[d]));
                x = lValue * Math.cos(rExtent) + origin[0] + margin.left;
                y = lValue * Math.sin(rExtent) + origin[1] + margin.top;

                var halfRadians = radians / 2;
                var pathData = [
                    [0, rInteraction - halfRadians],
                    [lInteraction, rInteraction - halfRadians],
                    [lInteraction, rInteraction + halfRadians]
                ];

                var datumToBind = {
                    xExtent: xExtent,
                    yExtent: yExtent,
                    x: x,
                    y: y,
                    key: properties[i],
                    datum: datum
                };

                g.append('path')
                    .datum(datumToBind)
                    .attr('class', 'star-interaction')
                    .attr('transform', 'translate(' + origin[0] + ',' + origin[1] + ')')
                    .attr('d', path(pathData) + 'Z');

                rInteraction += radians;
                rExtent += radians;
            })
        }

        function nop() {
            return;
        }

        chart.interaction = function () {
            drawInteraction();
        };

        chart.properties = function (_) {
            if (!arguments.length) return properties;
            properties = _;
            radii = properties.length;
            radians = 2 * Math.PI / radii;
            return chart;
        };

        chart.scales = function (_) {
            if (!arguments.length) return scales;
            if (Array.isArray(_)) {
                scales = _;
            } else {
                scales = [_];
            }
            return chart;
        };

        chart.width = function (_) {
            if (!arguments.length) return width;
            width = _;
            radius = width / 2;
            origin = [radius, radius];
            scale.range([0, radius])
            return chart;
        };

        chart.margin = function (_) {
            if (!arguments.length) return margin;
            margin = _;
            origin = [radius, radius];
            return chart;
        };

        chart.labelMargin = function (_) {
            if (!arguments.length) return labelMargin;
            labelMargin = _;
            return chart;
        };

        chart.title = function (_) {
            if (!arguments.length) return title;
            title = _;
            return chart;
        };


        chart.includeGuidelines = function (_) {
            if (!arguments.length) return includeGuidelines;
            includeGuidelines = _;
            return chart;
        };

        chart.includeLabels = function (_) {
            if (!arguments.length) return includeLabels;
            includeLabels = _;
            return chart;
        };

        return chart;
    };

    /**
     * Deep copy the object
     * @param obj
     * @returns {Array}
     */
    function deepCopy(obj) {
        var out = [], i = 0, len = obj.length;
        for (; i < len; i++) {
            if (obj[i] instanceof Array) {
                out[i] = deepCopy(obj[i]);
            }
            else out[i] = obj[i];
        }
        return out;
    }


    /**
     * Convert 2-d array to array of objects
     * @param data
     * @returns {Array}
     */
    function convertToArrayOfObjects(data) {
        var keys = data.shift(),
            i = 0, k = 0,
            obj = null,
            output = [];

        for (i = 0; i < data.length; i++) {
            obj = {};

            for (k = 0; k < keys.length; k++) {
                obj[keys[k]] = data[i][k].toString();
            }

            output.push(obj);
        }

        return output;
    }

    /**
     * Get the labels of each dimension
     * @param dataArray
     * @returns {Array}
     */
    function getLabels(dataArray) {
        var labels = [];
        for (var i = 1; i < dataArray[0].length; i++) {
            labels.push(dataArray[0][i]);
        }
        return labels;
    }
}

