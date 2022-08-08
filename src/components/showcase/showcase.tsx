import React from "react";
import styles from "./showcase.module.scss";

type Props = {
  invert?: boolean;
};

const Showcase: React.FC<Props> = ({ invert }) => {
  return (
    <div className={[styles.container, invert ? styles.invert : ""].join(" ")}>
      <div className={styles.imageContainer}>Example Image</div>

      <div>
        <h1>Projeto A</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
          corporis dolorum porro aut, eum soluta culpa perferendis enim odit
          neque necessitatibus fuga, earum aliquid dolorem ea voluptates
          pariatur. Commodi, vitae?
        </p>
      </div>
    </div>
  );
};

export default Showcase;
