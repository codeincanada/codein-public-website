import { ReactNode } from "react";

const Sidebar = ({
  isCollapsed,
  isFirstClick,
  collapseSlot,
  topSection,
  bottomSection,
  socialMediaLinks,
  footer,
}: {
  isCollapsed: boolean;
  isFirstClick: boolean;
  collapseSlot: ReactNode;
  topSection: ReactNode;
  bottomSection: ReactNode;
  socialMediaLinks: ReactNode;
  footer?: ReactNode;
}) => {
  const collapsedClassesForBody = "display-none text-white";
  const expandedClassesForBody =
    "md:rounded-xl text-gray-300 bg-opacity-10 hover:bg-opacity-50 bg-black hover:bg-black border border-red-500";
  const collapsedClassesForToggle = `p-2 ${
    isFirstClick
      ? "bg-pink-200 bg-opacity-5 text-blue-300"
      : "bg-transparent bg-opacity-10 text-gray-600 italic"
  } cursor-pointer hover:bg-pink-200 hover:bg-opacity-5 hover:text-pink-500 flex flex-1 justify-center`;
  const expandedClassesForToggle =
    "p-2 text-red-500 flex flex-1 justify-center";
  return (
    <aside
      className={isCollapsed ? collapsedClassesForBody : expandedClassesForBody}
    >
      <div
        className={
          isCollapsed ? collapsedClassesForToggle : expandedClassesForToggle
        }
      >
        {collapseSlot}
      </div>
      {!isCollapsed && (
        <div className="p-10">
          <section className={"mb-6"}>{topSection}</section>
          <section>{bottomSection}</section>
          {/* <section>{socialMediaLinks}</section>*/}
          {footer && <section>{footer}</section>}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
