import { SideNavigation } from "@awsui/components-react";
import { Page, getLinkableUrl } from "../page";

function Navigation() {
  return <SideNavigation
    activeHref={getLinkableUrl(Page.Home)}
    header={
      {
        text: 'HI',
        href: getLinkableUrl(Page.Home)
      }
    }
    items={[
      {
        type: 'link',
        text: 'Browser Experience',
        href: getLinkableUrl(Page.Experiences)
      },
      {
        type: 'link',
        text: 'Create Experience',
        href: getLinkableUrl(Page.NewExperience)
      }
    ]}
  />
}

export default Navigation;