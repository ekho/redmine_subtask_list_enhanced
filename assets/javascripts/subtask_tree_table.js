(function ($){$(document).ready(function() {
  'use strict';

  const getClasses = (element, filter = null) => $(element).length ? $(element).attr("class").split(/\s+/).filter(c => filter ? filter(c) : true) : [];
  const getIssueId = element => $(element).length ? getClasses(element, c => c.startsWith('issue-'))[0].substr(6) : null;
  $('div#issue_tree table.list.issues tr.issue').each(function(){
    let element = $(this);
    element.attr('data-node-id', getIssueId(element));
    if (element.hasClass('idnt')) {
      element.attr('data-node-pid', getIssueId(element.prevAll('tr.issue.parent:first')));
      element.removeClass('idnt');
      getClasses(element, c => c.startsWith('idnt-')).forEach(cls => element.removeClass(cls));
    }
  });

  const classExpanded = 'fa-angle-down';
  const classCollapsed = 'fa-angle-right';
  const showAsExpanded = element => $(element).removeClass(classCollapsed).addClass(classExpanded);
  const showAsCollapsed = element => $(element).removeClass(classExpanded).addClass(classCollapsed);

  $('div#issue_tree table.list.issues').simpleTreeTable({
    expander: '.subtask_all_expand',
    collapser: '.subtask_all_collapse',
    store: 'session', // or 'local'
    storeKey: 'KEY',
    iconPosition: '.subject',
    iconTemplate: '<span class="rm-icon fa-fw"></span>'
  }).on('node:open',(e, $node) => showAsExpanded($($node).find('.simple-tree-table-icon'))).on('node:close', (e, $node) => showAsCollapsed($($node).find('.simple-tree-table-icon')));

  showAsExpanded('.simple-tree-table-opened .simple-tree-table-icon');
  showAsCollapsed('.simple-tree-table-closed .simple-tree-table-icon');
})})(jQuery);
