import Badge from "../components/Badge";
import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseDropdown from "../components/BaseDropdown";
import BaseHeader from "../components/BaseHeader";
import BaseInput from "../components/BaseInput";
import BaseNav from "../components/BaseNav";
import BasePagination from "../components/BasePagination";
import BaseProgress from "../components/BaseProgress";
import BaseSwitch from "../components/BaseSwitch";
import BaseRadio from "../components/BaseRadio";
import BaseTable from "../components/BaseTable";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import TabPane from "../components/Tabs/TabPane";
import Tabs from "../components/Tabs/Tabs";
import CloseButton from "../components/CloseButton";
import Deposit from "../components/Deposit";
import Reward from "../components/Reward";
import HomepageNav from "../components/HomepageNav";
import HomepageDropdown from "../components/HomepageDropdown";

import { ElTooltip, ElPopover } from "element-plus";
import GlobalDirectives from "./globalDirectives";
import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "../assets/scss/degis.scss";
import SidebarPlugin from "../components/SidebarPlugin";

export default {
  install(app) {
    app.component("badge", Badge);
    app.component("base-alert", BaseAlert);
    app.component("base-button", BaseButton);
    app.component("base-checkbox", BaseCheckbox);
    app.component("base-dropdown", BaseDropdown);
    app.component("base-header", BaseHeader);
    app.component("base-input", BaseInput);
    app.component("base-nav", BaseNav);
    app.component("base-pagination", BasePagination);
    app.component("base-progress", BaseProgress);
    app.component("base-switch", BaseSwitch);
    app.component("base-radio", BaseRadio);
    app.component("base-table", BaseTable);
    app.component("card", Card);
    app.component("stats-card", StatsCard);

    app.component("degis-deposit", Deposit);
    app.component("degis-reward", Reward);
    app.component("close-button", CloseButton);
    app.component("homepage-nav", HomepageNav);
    app.component("homepage-dropdown", HomepageDropdown);

    app.component("tab-pane", TabPane);
    app.component("tabs", Tabs);
    app.use(ElTooltip);
    app.use(ElPopover);

    app.use(SidebarPlugin);
    app.use(GlobalDirectives);
  },
};
