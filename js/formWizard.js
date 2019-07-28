var taskCount = 0;
var numOfTasks = Object.keys(currentSetting).length;
var files = [];
var vis = [];
var nc = [];
var sg;
var confidenceTest = false;
var sgTestCount = 0;
for (var i = 0; i < numOfTasks; i++) {
    files.push(currentSetting[Object.keys(currentSetting)[i]][0]);
    vis.push(currentSetting[Object.keys(currentSetting)[i]][1]);
    nc.push(currentSetting[Object.keys(currentSetting)[i]][2]);
}
// welcome
var page1 = document.getElementById("page1");
// demographic
var page2 = document.getElementById("page2");
// SG intro
var page5 = document.getElementById("page5");
// SG training/tasks
var page6 = document.getElementById("sgGrouping");
// break SG
var page7 = document.getElementById("break_sg");
var page9 = document.getElementById("final");
page1.style.display = "block";

var time = 0;
var t;

/**
 * Time count for each task
 */
function timedCount() {
    time = time + 1;
    t = setTimeout("timedCount()", 1000);
}

function stopCount() {
    clearTimeout(t);
    return time;
}

function clearCount() {
    time = 0;
}

/**
 * Specifications for display on each page
 */
function showTab() {

    if (page6.style.display === "block") {
        if (!confidenceTest) {
            // show the "Add Class" and "Cut Class" buttons for the clustering tasks
            timedCount();
            document.getElementById("newClass").style.display = "block";
            document.getElementById("deleteClass").style.display = "block";
            document.getElementById("nextBtn").style.display = "none";
        } else {
            // hide the buttons during confidence test
            document.getElementById("newClass").style.display = "none";
            document.getElementById("deleteClass").style.display = "none";
        }
    } else if (document.getElementById("text_sg").innerText === "Thanks for your Participation!") {
        // hide all buttons at the end of the entire study
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("newClass").style.display = "none";
        document.getElementById("deleteClass").style.display = "none";
    } else {
        // only show the "Next" button for all the other steps
        document.getElementById("newClass").style.display = "none";
        document.getElementById("deleteClass").style.display = "none";
        document.getElementById("nextBtn").style.display = "block";
    }

    // ask the participant if he/she understood the concepts after the 3rd training session
    if (page7.style.display === "block" && sgTestCount === 3) {
        document.getElementById("questions_SG").style.display = "block";
    } else {
        document.getElementById("questions_SG").style.display = "none";
    }

    if (page9.style.display === "block") {
        document.getElementById("nextBtn").style.display = "none";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}

/**
 * Actions after the "Next" button is clicked
 */
function nextPrev() {

    // move from the welcome page to demographics
    if (page1.style.display === "block") {
        page1.style.display = "none";
        page2.style.display = "block";
        document.getElementById("imprint").style.display = "none";
        document.getElementById("icon").style.display = "none";

    } else if (page2.style.display === "block") {
        // only move on to the intro page if all fields are filled
        var valid = true;
        if (document.getElementById("fname").value === "" ||
            document.getElementById("age").value === "" ||
            document.getElementById("course").value === "") {
            document.getElementById("age").value = "23";
            document.getElementById("course").value = "Computer Science";
            //valid = false;
        }

        if (!document.getElementById("male").checked &&
            !document.getElementById("female").checked &&
            !document.getElementById("diverse").checked) {
            valid = false;
        }
        if (!document.getElementById("bachelor").checked &&
            !document.getElementById("master").checked &&
            !document.getElementById("phd").checked &&
            !document.getElementById("other").checked) {
            valid = false;
        }

        if (valid) {
            page2.style.display = "none";
            page5.style.display = "block";
        } else {
            alert("please fill out all the data");
        }

    } else if (page5.style.display === "block") {
        // move from the intro to task training session 1
        page5.style.display = "none";
        sgVis("data/DataModel_1.csv");
        page6.style.display = "block";
        sgTestCount = 1;

    } else if (page6.style.display === "block") {
        // show the confidence test after finishing the clustering task
        if (!confidenceTest) {
            $("#strong_Disagree_test_sg").prop('checked', false);
            $("#MoreOrLess_Disagree_test_sg").prop('checked', false);
            $("#Disagree_test_sg").prop('checked', false);
            $("#Neutral_test_sg").prop('checked', false);
            $("#MoreOrLess_Agree_test_sg").prop('checked', false);
            $("#Agree_test_sg").prop('checked', false);
            $("#strong_Agree_test_sg").prop('checked', false);
            confidenceTest = true;
            stopCount();
            document.getElementById("confidence_test_sg").style.display = "block";
        } else if (!document.getElementById("strong_Disagree_test_sg").checked &&
            !document.getElementById("Disagree_test_sg").checked &&
            !document.getElementById("MoreOrLess_Disagree_test_sg").checked &&
            !document.getElementById("Neutral_test_sg").checked &&
            !document.getElementById("MoreOrLess_Agree_test_sg").checked &&
            !document.getElementById("Agree_test_sg").checked &&
            !document.getElementById("strong_Agree_test_sg").checked
        ) {
            alert("Please choose a confidence level!")
        } else {
            // move on the the break page
            page6.style.display = "none";
            confidenceTest = false;
            document.getElementById("confidence_test_sg").style.display = "none";
            if (taskCount === numOfTasks) {
                // if all the tasks has been done, change the text and hide all buttons
                page7.style.display = "block";
                document.getElementById("text_sg").innerText = "Thanks for your Participation!\n\n Any Thoughts? ";
                document.getElementById("text_sg").style.paddingBottom = "100px";
                document.getElementById("sg_img").style.display = "block";
                document.getElementById("buttons").style.display = "none";
                document.getElementById("nextBtn").style.opacity = "0%";
                document.getElementById("newClass").style.opacity = "0%";
                document.getElementById("deleteClass").style.opacity = "0%";
            } else {
                page7.style.display = "block";

            }
        }
    }

    else if (page7.style.display === "block") {
        // go through all 3 training tasks
        page7.style.display = "none";
        if (sgTestCount === 1) {
            sgVis("data/DataModel_2.csv");
            page6.style.display = "block";
            sgTestCount++;
        } else if (sgTestCount === 2) {
            sgVis("data/DataModel_3.csv");
            page6.style.display = "block";
            sgTestCount++;
        } else if (taskCount < numOfTasks) {
            // only move on to the real tasks if the participant has no more questions to the concept or the tasks
            if (document.getElementById("questions_StarGlyph").checked) {
                sgVis(files[taskCount]);
                page6.style.display = "block";
                sgTestCount++;
                taskCount++;
            } else {
                // go back to intro if the participant has not fully understood the concepts or the tasks
                sgTestCount = 0;
                page5.style.display = "block";
            }
        }
    }

    showTab();
}
