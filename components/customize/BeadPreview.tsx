import Image from 'next/image';
import { FC } from 'react';
import { BeadType, IBeadType } from '../beadsInfo';

interface IProps {
  size: number;
  index: number;
  click?: (index: number) => void;
  left: number;
  top: number;
  isSelected: boolean;
  bead: IBeadType[BeadType];
  hover?:boolean
}

const BeadPreview: FC<IProps> = ({ isSelected, bead, size, click, left, top, index,hover=true }) => {
  return (
    <div
      key={index}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 rounded-full
                  ${isSelected ? "ring-4 ring-[#c9a87c] z-10" : hover?"hover:ring-2 hover:ring-[#c9a87c] cursor-pointer":undefined}
                  transition-all duration-200 shadow-md overflow-hidden`}
      style={{
        left: `calc(50% + ${left}px)`,
        top: `calc(50% + ${top}px)`,
        width: size,
        height: size,
      }}
      aria-label={`Bead ${index + 1}, ${bead?.name || "Empty bead"}`}
      onClick={() => click?.(index)}
    >
      <Image
        src={bead?.image || "/placeholder.svg?height=48&width=48"}
        alt={bead?.name || "Empty bead"}
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
      <span className="sr-only">Bead {index + 1}</span>
    </div>
  );
}

export default BeadPreview;
