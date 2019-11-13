require_dependency 'redmine_subtask_list_enhanced/hooks/subtask_list_enhanced_hook'
require_dependency 'redmine_subtask_list_enhanced/patches/issues_helper_patch'

reloader = defined?(ActiveSupport::Reloader) ? ActiveSupport::Reloader : ActionDispatch::Reloader
reloader.to_prepare do
  unless IssuesHelper.included_modules.include?(RedmineSubtaskListEnhanced::Patches::IssuesHelperPatch)
    IssuesHelper.send :include, RedmineSubtaskListEnhanced::Patches::IssuesHelperPatch
  end
end

Redmine::Plugin.register :redmine_subtask_list_enhanced do
  name 'Redmine Subtask List Enhanced plugin'
  author 'Boris Gorbylev'
  description 'This plugin provide tree table and show/hide closed issues to subtask list.'
  version '1.1.1'
  url 'https://github.com/ekho/redmine_subtask_list_enhanced'
  author_url 'https://github.com/ekho'
end
