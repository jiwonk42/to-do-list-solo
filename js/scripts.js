//business logic
function Task(task) {
  this.newTask = task;
}

//user interface
$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var task = new Task(inputtedTask);

    $("ul#tasks").append("<li><span class='task'>" + task.newTask + "</span></li>");

    // Check off tasks or back on
    $("li .task").last().click(function() {
      if ($(this).hasClass("done")) {
        $(this).removeClass();
      } else {
        $(this).addClass("done");
      }
    });

    $("input#new-task").val("");
  });
});
