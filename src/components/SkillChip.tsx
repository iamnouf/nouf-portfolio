// components/SkillChip.tsx
import React from "react";

type SkillChipProps = {
  label: string;
  icon: JSX.Element;
};

export default function SkillChip({ label, icon }: SkillChipProps) {
  return (
    <div
      className="chip flex flex-col items-center justify-center text-center gap-2"
      style={{ width: "80px" }} // عشان كلهم يكونوا نفس الحجم
    >
      <div className="text-3xl">{icon}</div> {/* الأيقونة أكبر */}
      <span className="text-sm">{label}</span> {/* الاسم تحت الأيقونة */}
    </div>
  );
}
