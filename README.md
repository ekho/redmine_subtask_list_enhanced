# Redmine Subtask List Enhanced

This plugin provide tree table (using [jquery-simple-tree-table](https://github.com/kanety/jquery-simple-tree-table)) and show/hide closed issues to subtask-list.

* http://www.redmine.org/plugins/redmine_subtask_list_enhanced

Inspired by http://www.redmine.org/plugins/redmine_subtask_list_accordion

## Features

* Add collapsible table tree feature to subtask-list.
* Show/hide closed subtasks

## Compatibility

Redmine 3.4, 4.0, 4.1

Tested on:
* 3.4.x
* 4.0.x
* 4.1.x

## Installation

1. Follow the Redmine plugin installation steps at: http://www.redmine.org/wiki/redmine/Plugins
2. Run the plugin migrations `rake redmine:plugins:migrate RAILS_ENV=production`
3. Restart your Redmine web server
