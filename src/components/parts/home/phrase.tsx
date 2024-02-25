"use client";
import { useState } from "react";
import SakuraAnimationComponent from "@/components/sakura";
import SectionTitle from "../../sectionTitle";

const Phrase = () => {
  const [maleniaCombo, setMaleniaCombo] = useState<number>(0);

  return (
    <>
      <SectionTitle onClick={() => setMaleniaCombo((prev) => prev + 1)}>
        Heed my words...
      </SectionTitle>

      {maleniaCombo > 1 && <SakuraAnimationComponent />}
    </>
  );
};

export default Phrase;
