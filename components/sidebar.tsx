import { ReactNode } from "react";

const Sidebar = ({
  isCollapsed,
  topSection,
  bottomSection,
  socialMediaLinks,
  footer,
}: {
  isCollapsed: boolean;
  topSection?: ReactNode;
  bottomSection?: ReactNode;
  socialMediaLinks?: ReactNode;
  footer?: ReactNode;
}) => {
  const collapsedClassesForBody = "display-none text-white";
  const expandedClassesForBody =
    "md:rounded-xl text-gray-300 bg-opacity-10 hover:bg-opacity-50 bg-black hover:bg-black border border-red-500";
  return (
    <aside
      className={isCollapsed ? collapsedClassesForBody : expandedClassesForBody}
    >
      {!isCollapsed && (
        <div>
          {topSection && <section className={"mb-6"}>{topSection}</section>}
          {bottomSection && <section>{bottomSection}</section>}
          {socialMediaLinks && <section>{socialMediaLinks}</section>}
          {footer && <section>{footer}</section>}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
