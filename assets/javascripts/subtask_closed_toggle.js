'use strict';

(function ($){$(document).ready(function() {
  let issue_tree = $('#issue_tree');
  let closed_issues = issue_tree.find('tr.issue.closed');
  let btn_hide = $('div.closed_toggle_control .subtask_closed_hide a');
  let btn_show = $('div.closed_toggle_control .subtask_closed_show a');

  btn_hide.on('click', function(){
    closed_issues.addClass('subtask-closed-hidden');
    btn_hide.hide();
    btn_show.show();
  });

  btn_show.on('click', function(){
    closed_issues.removeClass('subtask-closed-hidden');
    btn_show.hide();
    btn_hide.show();
  });
})})(jQuery);
