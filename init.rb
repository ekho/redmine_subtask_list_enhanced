Redmine::Plugin.register :redmine_subtask_list_enhanced do
  name 'Redmine Subtask List Enhanced plugin'
  author 'Boris Gorbylev'
  description 'This plugin provide tree table and show/hide closed issues to subtask list.'
  version '1.1.1'
  url 'https://github.com/ekho/redmine_subtask_list_enhanced'
  author_url 'https://github.com/ekho'
end

if Rails.version > '6.0'
  if Rails.configuration.respond_to?(:autoloader) && Rails.configuration.autoloader == :zeitwerk
    Rails.autoloaders.each { |loader| loader.ignore(File.dirname(__FILE__) + '/lib') }
  end
  require_dependency File.dirname(__FILE__) + '/lib/redmine_subtask_list_enhanced/hooks/subtask_list_enhanced_hook'
else
  require_dependency 'redmine_subtask_list_enhanced/hooks/subtask_list_enhanced_hook'
end
