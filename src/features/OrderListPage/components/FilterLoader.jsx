import { Icon, IconType } from "../../../shared/components/Icon";
import { Span, SpanType } from "../../../shared/components/Span";

import styles from "./FilterLoader.module.css";

export const FilterLoader = ({ buttonText }) => (
  <div className={styles._}>
    <Icon className={styles.icon} type={IconType.refresh} />
    <Span type={SpanType.filterRowLoader}>{buttonText}</Span>
  </div>
);
