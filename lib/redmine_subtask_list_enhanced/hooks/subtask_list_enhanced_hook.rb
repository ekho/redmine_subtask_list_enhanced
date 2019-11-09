class SubtaskListEnhancedHook < Redmine::Hook::ViewListener
  render_on :view_issues_show_description_bottom, :partial => 'issues/subtask_list_enhanced_partial'
end
