require_dependency("issues_helper")

module RedmineSubtaskListEnhanced
  module Patches
    module IssuesHelperPatch
      extend ActiveSupport::Concern

      def sla_has_grandson_issues?(issue)
        return issue.descendants.visible.where(["issues.parent_id <> ?", issue.id]).count > 0
      end
    end
  end
end
