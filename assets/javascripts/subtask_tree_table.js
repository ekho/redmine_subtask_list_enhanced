'use strict';

(function ($){$(document).ready(function() {
  let getClasses = (element, filter = null) => $(element).length ? $(element).attr("class").split(/\s+/).filter(c => filter ? filter(c) : true) : [];
  let getIssueId = element => $(element).length ? getClasses(element, c => c.startsWith('issue-'))[0].substr(6) : null;
  $('table.list.issues.odd-even tr.issue').each(function(){
    let element = $(this);
    element.attr('data-node-id', getIssueId(element));
    if (element.hasClass('idnt')) {
      element.attr('data-node-pid', getIssueId(element.prevAll('tr.issue.parent:first')));
      element.removeClass('idnt');
      getClasses(element, c => c.startsWith('idnt-')).forEach(cls => element.removeClass(cls));
    }
  });

  $('table.list.issues.odd-even').simpleTreeTable({
    expander: '.subtask_all_expand',
    collapser: '.subtask_all_collapse',
    store: 'session', // or 'local'
    storeKey: 'KEY',
    iconPosition: '.subject',
  });
})})(jQuery);
