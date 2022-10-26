import { ReactComponent as Abort } from "../assets/abort.svg";
import { ReactComponent as Bin } from "../assets/bin.svg";
import { ReactComponent as Checkmark } from "../assets/checkmark.svg";
import { ReactComponent as Dot } from "../assets/dot.svg";
import { ReactComponent as Filter } from "../assets/filter.svg";
import { ReactComponent as Locked } from "../assets/locked.svg";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Pencil } from "../assets/pencil.svg";
import { ReactComponent as Refresh } from "../assets/refresh.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";
import { ReactComponent as V_arrow } from "../assets/v_arrow.svg";
import { ReactComponent as X_large } from "../assets/x-large.svg";
import { ReactComponent as X_medium } from "../assets/x-medium.svg";

import styles from "./Icon.module.css";

export const IconType = {
  abort: Abort,
  bin: Bin,
  checkmark: Checkmark,
  dot: Dot,
  filter: Filter,
  locked: Locked,
  moon: Moon,
  pencil: Pencil,
  refresh: Refresh,
  search: Search,
  sun: Sun,
  v_arrow: V_arrow,
  x_large: X_large,
  x_medium: X_medium,

  styles: {
    pageHeader: styles.pageHeaderIcon,
    filterRow: styles.filterRowIcon,
    searchbar: styles.searchbarIcon,
    filterRowInput: styles.filterRowInputIcon,
  },
};

export const Icon = ({ type, ...props }) => {
  const Type = type;
  return !!type && <Type {...props} />;
};
