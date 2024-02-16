import React from 'react';
import exp from '../exp.module.css';
import Image from 'next/image';
import graduateIcon from '@public/icons/graduate-cap-svgrepo-com.svg';
import type { expDataObj } from '@lib/types';

type extCardProps = {
    side: string;
    data: expDataObj;
}

export default function ExpCard({ side, data }: extCardProps) {
  return (
    <div className={`${exp.container} ${side === 'left' ? exp.leftContainer : exp.rightContainer}`}>
        <div className={`${exp.iconContainer}`}>
            <Image className={`${exp.icon}`} src={graduateIcon} alt="isadfasdg"/>
        </div>
        <article className={`${exp.textBox}`}>
                <h2 className='text-lg sm:text-xl'>{data.title}</h2>
                <small>{data.date}</small>
                <p className='hidden sm:block'>{data.description}</p>
        </article>
    </div>
  )
}
