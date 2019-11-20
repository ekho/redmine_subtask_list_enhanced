require_dependency("issues_helper")

module RedmineSubtaskListEnhanced
  module Patches
    module IssuesHelperPatch
      def self.included(base) # :nodoc:
        base.send(:include, InstanceMethods)
        base.class_eval do
          unloadable
        end
      end

      module InstanceMethods
        def sla_has_grandson_issues?(issue)
          issue.descendants.visible.where(["issues.parent_id <> ?", issue.id]).count > 0
        end
      end
    end
  end
end

unless IssuesHelper.included_modules.include?(RedmineSubtaskListEnhanced::Patches::IssuesHelperPatch)
  IssuesHelper.send(:include, RedmineSubtaskListEnhanced::Patches::IssuesHelperPatch)
end