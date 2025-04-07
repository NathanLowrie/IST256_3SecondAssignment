$(document).ready(function () {
    console.log("jQuery is ready!");
    let startTime = 0;
    let targetTime = 3;
    let attempts = [];
    let attemptNumber = 0;

    // Start/Stop Timing
    $("#button").on("click", function () {
        let $button = $(this);
        let $feedback = $("#result");
        if ($button.text() !== "Start") {
            let stopTime = Date.now();
            let elapsed = ((stopTime - startTime) / 1000).toFixed(2);
            let difference = Math.abs(elapsed - targetTime);
            let resultClass;

            if (targetTime.toFixed(2) !== elapsed) {
                if (difference <= 0.2) {
                    resultClass = "text-primary";
                } else if (difference <= 0.5) {
                    resultClass = "text-warning";
                } else {
                    resultClass = "text-danger";
                }
            } else {
                resultClass = "text-success";
            }


            $feedback
                .text(`Your time is ${elapsed} seconds`)
                .removeClass("text-success text-primary text-warning text-danger")
                .addClass(resultClass);

            $button.text("Start");
            attemptNumber++;
            attempts.push({
                number: attemptNumber,
                start: new Date(startTime).toLocaleTimeString(),
                stop: new Date(stopTime).toLocaleTimeString(),
                elapsed: parseFloat(elapsed)
            });

            updateAttemptLog();
            updateSummary();
        } else {
            startTime = Date.now();
            $button.text("Stop");
            $feedback.text("").removeClass("text-success text-primary text-warning text-danger"); }
    });


    $("#attemptsButton").on("click", function () {
        $("#attemptsSection").toggle(); });

    $("#summaryButton").on("click", function () {
        $("#summarySection").toggle();
    });

    function updateAttemptLog() {
        let $list = $("#attemptList");
            $list.empty();

        attempts.forEach((attempt) => {
            $list.append(
                `<li class="list-group-item">
          Attempt ${attempt.number}: ${attempt.elapsed}s
          (Start: ${attempt.start}, Stop: ${attempt.stop})
        </li>`);
        });
    }

    function updateSummary() {
        if (attempts.length === 0) return;
            let times = attempts.map(a => a.elapsed);
            let min = Math.min(...times).toFixed(2);
            let max = Math.max(...times).toFixed(2);
            let avg = (times.reduce((a, b) => a + b, 0) / times.length).toFixed(2);

        $("#summaryText").html(`
      Total Attempts: ${attempts.length}<br>
      
      Min Time: ${min} s<br>
      
      Max Time: ${max} s<br>
      
      Avg Time: ${avg} s 
`);

        function showChart() {
            if (attempts.length === 0) return;

            const labels = attempts.map(a => `#${a.number}`);
            const series = [attempts.map(a => a.elapsed)];


            new Chartist.Line('#summaryChart', {
                labels: labels,

                series: series
            }, {
                low: 0,
                showArea: true,
                axisY: {

                    onlyInteger: false,
                    offset: 40
                }
            });
        }

        showChart();
    }
});

// for commit purposes