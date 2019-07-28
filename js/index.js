/**
 * Change height and margin for each panel when a new one is added so that they fit in one page
 */
function appendClass() {
    if (document.getElementById("sgGrouping").style.display === "block") {
        if (document.getElementById("target2").style.display === "none") {
            document.getElementById("target2").style.height = "600px";
            document.getElementById("target2").style.display = "block";
            document.getElementById("target2").style.marginTop = "25px";
        } else if (document.getElementById("target3").style.display === "none") {
            document.getElementById("target2").style.height = "290px";
            document.getElementById("target3").style.height = "290px";
            document.getElementById("target3").style.display = "block";
            document.getElementById("target3").style.marginTop = "20px";
        } else if (document.getElementById("target4").style.display === "none") {
            document.getElementById("target2").style.height = "188px";
            document.getElementById("target3").style.height = "188px";
            document.getElementById("target4").style.height = "188px";
            document.getElementById("target4").style.display = "block";
            document.getElementById("target3").style.marginTop = "18px";
            document.getElementById("target4").style.marginTop = "18px";
        } else if (document.getElementById("target5").style.display === "none") {
            document.getElementById("target2").style.height = "138px";
            document.getElementById("target3").style.height = "138px";
            document.getElementById("target4").style.height = "138px";
            document.getElementById("target5").style.height = "138px";
            document.getElementById("target5").style.display = "block";
            document.getElementById("target3").style.marginTop = "16px";
            document.getElementById("target4").style.marginTop = "16px";
            document.getElementById("target5").style.marginTop = "16px";
        } else if (document.getElementById("target6").style.display === "none") {
            document.getElementById("target2").style.height = "108.8px";
            document.getElementById("target3").style.height = "108.8px";
            document.getElementById("target4").style.height = "108.8px";
            document.getElementById("target5").style.height = "108.8px";
            document.getElementById("target6").style.height = "108.8px";
            document.getElementById("target6").style.display = "block";
            document.getElementById("target3").style.marginTop = "14px";
            document.getElementById("target4").style.marginTop = "14px";
            document.getElementById("target5").style.marginTop = "14px";
            document.getElementById("target6").style.marginTop = "14px";
        } else if (document.getElementById("target7").style.display === "none") {
            document.getElementById("target2").style.height = "90px";
            document.getElementById("target3").style.height = "90px";
            document.getElementById("target4").style.height = "90px";
            document.getElementById("target5").style.height = "90px";
            document.getElementById("target6").style.height = "90px";
            document.getElementById("target7").style.height = "90px";
            document.getElementById("target7").style.display = "block";
            document.getElementById("target3").style.marginTop = "12px";
            document.getElementById("target4").style.marginTop = "12px";
            document.getElementById("target5").style.marginTop = "12px";
            document.getElementById("target6").style.marginTop = "12px";
            document.getElementById("target7").style.marginTop = "12px";
        } else if (document.getElementById("target8").style.display === "none") {
            document.getElementById("target2").style.height = "77.142857px";
            document.getElementById("target3").style.height = "77.142857px";
            document.getElementById("target4").style.height = "77.142857px";
            document.getElementById("target5").style.height = "77.142857px";
            document.getElementById("target6").style.height = "77.142857px";
            document.getElementById("target7").style.height = "77.142857px";
            document.getElementById("target8").style.height = "77.142857px";
            document.getElementById("target8").style.display = "block";
            document.getElementById("target3").style.marginTop = "10px";
            document.getElementById("target4").style.marginTop = "10px";
            document.getElementById("target5").style.marginTop = "10px";
            document.getElementById("target6").style.marginTop = "10px";
            document.getElementById("target7").style.marginTop = "10px";
            document.getElementById("target8").style.marginTop = "10px";
        } else if (document.getElementById("target9").style.display === "none") {
            document.getElementById("target2").style.height = "68px";
            document.getElementById("target3").style.height = "68px";
            document.getElementById("target4").style.height = "68px";
            document.getElementById("target5").style.height = "68px";
            document.getElementById("target6").style.height = "68px";
            document.getElementById("target7").style.height = "68px";
            document.getElementById("target8").style.height = "68px";
            document.getElementById("target9").style.height = "68px";
            document.getElementById("target9").style.display = "block";
            document.getElementById("target3").style.marginTop = "8px";
            document.getElementById("target4").style.marginTop = "8px";
            document.getElementById("target5").style.marginTop = "8px";
            document.getElementById("target6").style.marginTop = "8px";
            document.getElementById("target7").style.marginTop = "8px";
            document.getElementById("target8").style.marginTop = "8px";
            document.getElementById("target9").style.marginTop = "8px";
        }
    }
}

/**
 * Adjust the panel height and margin after one is deleted
 */
function cutClass() {
    if (document.getElementById("sgGrouping").style.display === "block") {
        if (document.getElementById("target9").style.display === "block") {
            if ($('#target9').is(':empty')) {
                document.getElementById("target2").style.height = "77.142857px";
                document.getElementById("target3").style.height = "77.142857px";
                document.getElementById("target4").style.height = "77.142857px";
                document.getElementById("target5").style.height = "77.142857px";
                document.getElementById("target6").style.height = "77.142857px";
                document.getElementById("target7").style.height = "77.142857px";
                document.getElementById("target8").style.height = "77.142857px";
                document.getElementById("target9").style.display = "none";
                document.getElementById("target3").style.marginTop = "10px";
                document.getElementById("target4").style.marginTop = "10px";
                document.getElementById("target5").style.marginTop = "10px";
                document.getElementById("target6").style.marginTop = "10px";
                document.getElementById("target7").style.marginTop = "10px";
                document.getElementById("target8").style.marginTop = "10px";
            } else {
                alert("you can only delete an empty class");
            }
        } else if (document.getElementById("target8").style.display === "block") {
            if ($('#target8').is(':empty')) {
                document.getElementById("target2").style.height = "90px";
                document.getElementById("target3").style.height = "90px";
                document.getElementById("target4").style.height = "90px";
                document.getElementById("target5").style.height = "90px";
                document.getElementById("target6").style.height = "90px";
                document.getElementById("target7").style.height = "90px";
                document.getElementById("target8").style.display = "none";
                document.getElementById("target3").style.marginTop = "12px";
                document.getElementById("target4").style.marginTop = "12px";
                document.getElementById("target5").style.marginTop = "12px";
                document.getElementById("target6").style.marginTop = "12px";
                document.getElementById("target7").style.marginTop = "12px";
            } else {
                alert("you can only delete an empty class");
            }
        } else if (document.getElementById("target7").style.display === "block") {
            if ($('#target7').is(':empty')) {
                document.getElementById("target2").style.height = "108.8px";
                document.getElementById("target3").style.height = "108.8px";
                document.getElementById("target4").style.height = "108.8px";
                document.getElementById("target5").style.height = "108.8px";
                document.getElementById("target6").style.height = "108.8px";
                document.getElementById("target7").style.display = "none";
                document.getElementById("target3").style.marginTop = "14px";
                document.getElementById("target4").style.marginTop = "14px";
                document.getElementById("target5").style.marginTop = "14px";
                document.getElementById("target6").style.marginTop = "14px";
            } else {
                alert("you can only delete an empty class");
            }
        } else if (document.getElementById("target6").style.display === "block") {
            if ($('#target6').is(':empty')) {
                document.getElementById("target2").style.height = "138px";
                document.getElementById("target3").style.height = "138px";
                document.getElementById("target4").style.height = "138px";
                document.getElementById("target5").style.height = "138px";
                document.getElementById("target6").style.display = "none";
                document.getElementById("target3").style.marginTop = "16px";
                document.getElementById("target4").style.marginTop = "16px";
                document.getElementById("target5").style.marginTop = "16px";
            } else {
                alert("you can only delete an empty class");
            }
        } else if (document.getElementById("target5").style.display === "block") {
            if ($('#target5').is(':empty')) {
                document.getElementById("target2").style.height = "188px";
                document.getElementById("target3").style.height = "188px";
                document.getElementById("target4").style.height = "188px";
                document.getElementById("target5").style.display = "none";
                document.getElementById("target3").style.marginTop = "18px";
                document.getElementById("target4").style.marginTop = "18px";
            } else {
                alert("you can only delete an empty class");
            }
        } else if (document.getElementById("target4").style.display === "block") {
            if ($('#target4').is(':empty')) {
                document.getElementById("target2").style.height = "290px";
                document.getElementById("target3").style.height = "290px";
                document.getElementById("target4").style.display = "none";
                document.getElementById("target3").style.marginTop = "20px";
            } else {
                alert("you can only delete an empty class");
            }
        } else if (document.getElementById("target3").style.display === "block") {
            if ($('#target3').is(':empty')) {
                document.getElementById("target2").style.height = "600px";
                document.getElementById("target3").style.display = "none";
                document.getElementById("target2").style.marginTop = "25px";
            } else {
                alert("you can only delete an empty class");
            }
        }
    }
}

/**
 * convert an array of objects to CSV file
 * @param objArray
 * @returns {string}
 * @constructor
 */
function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = Object.keys(objArray[0]).join() + '\r\n';
    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line !== '') line += ',';

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

/**
 * Download the CSV file
 * @param filename
 * @param text
 */
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

/**
 * Store the clustering results and download them as CSV file
 */
function createObject() {

    if (page7.style.display === "block") {

        // fill in the demographics
        var firstName = document.getElementById("fname").value;
        var age = document.getElementById("age").value;
        var course;
        var vision;
        var knowledge = "";
        var gender;
        var confidence;

        if (document.getElementById("vision").checked) {
            vision = "normal";
        } else {
            vision = "not normal";
        }

        if (document.getElementById("knowledge_DA").checked) {
            knowledge = "Data Analysis; "
        }

        if (document.getElementById("knowledge_DV").checked) {
            knowledge = knowledge + "Data Visualization; "
        }

        if (document.getElementById("knowledge_SG").checked) {
            knowledge = knowledge + "Star Glyphs; "
        }

        if (document.getElementById("bachelor").checked) {
            course = "Bachelor: " + document.getElementById("course").value;
        } else if (document.getElementById("master").checked) {
            course = "Master: " + document.getElementById("course").value;
        } else if (document.getElementById("phd").checked) {
            course = "PhD: " + document.getElementById("course").value;
        } else if (document.getElementById("other").checked) {
            course = "other";
        }

        // get the confidence value from the likert scale
        if (document.getElementById("strong_Disagree_test_sg").checked) {
            confidence = -3;
        } else if (document.getElementById("Disagree_test_sg").checked) {
            confidence = -2;
        } else if (document.getElementById("MoreOrLess_Disagree_test_sg").checked) {
            confidence = -1;
        } else if (document.getElementById("Neutral_test_sg").checked) {
            confidence = 0;
        } else if (document.getElementById("MoreOrLess_Agree_test_sg").checked) {
            confidence = 1;
        } else if (document.getElementById("Agree_test_sg").checked) {
            confidence = 2;
        } else if (document.getElementById("strong_Agree_test_sg").checked) {
            confidence = 3;
        }


        if (document.getElementById("male").checked) {
            gender = "male";
        } else if (document.getElementById("female").checked) {
            gender = "female";
        } else if (document.getElementById("diverse").checked) {
            gender = "diverse";
        }
        var clusters = {
            "name": firstName,
            "age": age,
            "knowledge": knowledge,
            "visualization": "Star Glyph"
        };

        var results = {
            "name": firstName,
            "age": age,
            "knowledge": knowledge,
            "visualization": "Star Glyph"
        };

        var classification = [];

        clusters["time in s"] = time;
        results["time in s"] = time;


        // list of all panels for clusters
        var divList = document.querySelectorAll('[data-drop-target="true"]');
        var nodes = [].slice.call(divList, 1);

        for (var i = divList.length - 1; i >= 1; i--) {
            if (divList[i].style.display === "none") {
                // delete the panels that are not shown
                nodes.pop()
            } else {
                divList[i].style.display = "none"
            }
        }

        // delete empty clusters
        for (var j = nodes.length; j >= 1; j--) {
            if (!divList[j].hasChildNodes()) {
                nodes.pop();
            }
        }

        // go through all non-empty clusters and extract the data points in each cluster
        for (var cluster = 1; cluster <= nodes.length; cluster++) {
            var childrenId = [];
            var newCluster = "cluster" + cluster;
            nodes[cluster - 1].childNodes.forEach(function (c) {
                c.childNodes.forEach(function (value) {
                    var outcome = {
                        "name": firstName,
                        "gender": gender,
                        "age": age,
                        "vision": vision,
                        "course of study": course,
                        "knowledge": knowledge,
                        "visualization": "Star Glyph",
                        "file": dataName,
                        "time in s": time,
                        "confidence": confidence,
                        "data points": value.id,
                        "cluster": newCluster
                    };
                    classification.push(outcome);
                    childrenId.push(value.id);
                    results[value.id] = newCluster;
                })
            });
            clusters[newCluster] = childrenId;

        }
        // if there are data points left in the left panel, mark the cluster as "undefined"
        if (document.getElementById("target1").hasChildNodes()) {
            document.getElementById("target1").childNodes.forEach(function (value) {
                if (value.hasChildNodes()) {
                    var outcome = {
                        "name": firstName,
                        "gender": gender,
                        "age": age,
                        "vision": vision,
                        "course of study": course,
                        "knowledge": knowledge,
                        "visualization": "Star Glyph",
                        "file": dataName,
                        "time in s": time,
                        "confidence": confidence,
                        "data points": "data" + value.id.match(/\d/g).join(""),
                        "cluster": "undefined"
                    };
                    classification.push(outcome);
                }
            })
        }

        // clear the star glyphs in each panel to prepare for next round of task
        for (var d = dataLength - 1; d >= 0; d--) {
            var el = document.getElementById("targetA_box" + d);
            document.getElementById("target1").insertBefore(el, document.getElementById("target1").childNodes[0]);
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }

        // clear time count
        clearCount();

        // download the clustering results as csv file
        var csv = ConvertToCSV(classification);
        if (sgTestCount > 3) {
            download("sg_" + dataName, csv);
        }
    }
}

