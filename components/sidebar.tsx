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
  return (
    <aside>
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
