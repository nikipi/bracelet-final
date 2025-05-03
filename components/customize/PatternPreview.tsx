import { FC, PropsWithChildren, } from 'react';
import { BeadType, beadTypes } from '../beadsInfo';
import { getBeadPosition } from '@/app/build-your-own-crystal-jewelry/tool/tool';
import { beadSizes } from './SizeSelector';
import BeadPreview from './BeadPreview';

interface IProps {
  radius: number
  beadCount: number
  data: BeadType[]
  size: number
  click:()=>void
}

const PatternPreview: FC<IProps> = ({ data,  beadCount, radius, size,click }) => {
  return <div className='relative cursor-pointer' style={{zoom:0.4}} onClick={click}>
    <div className='w-[350px] h-[350px]'>
    {data.map((beadType, index) => {
      const { x, y } = getBeadPosition(index, beadCount, radius)
      const bead = beadTypes[beadType]
      return (
        <BeadPreview hover={false} key={index} left={x} top={y} isSelected={false} index={index} bead={bead} size={size} />
      )
    })}
    </div>
  </div>
}

export default PatternPreview