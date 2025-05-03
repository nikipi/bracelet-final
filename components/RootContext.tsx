'use client'

import { CustomizeizeContext, ICustomizeize } from '@/context/customize.context';
import { FC, PropsWithChildren, useState, } from 'react';
import { BeadType } from './beadsInfo';

interface IProps { }

const RootContext: FC<PropsWithChildren> = ({ children }) => {
  const [isGift, setIsGift] = useState<ICustomizeize["isGift"]>()
  const [zodiacSign, setZodiacSign] = useState<string>()
  const [purposes, setPurposes] = useState<any[]>([])
  const [preferredCrystals, setPreferredCrystals] = useState<BeadType[]>([])

  return <CustomizeizeContext.Provider value={{ isGift, zodiacSign, setIsGift, setZodiacSign, purposes, setPurposes, preferredCrystals, setPreferredCrystals }}>
    {children}
  </CustomizeizeContext.Provider>
}

export default RootContext