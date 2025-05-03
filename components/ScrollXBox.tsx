import { FC, PropsWithChildren, useRef } from 'react';

interface IProps {}

const childWidth = 140 * 2 - 24 * 2;

const ScrollXBox: FC<PropsWithChildren<IProps>> = ({ children }) => {
  const box = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const container = box.current!;
    const scrollWidth = container.scrollWidth;
    const sx = container.scrollLeft;
    const width = container.clientWidth;
    const num = scrollWidth - width;

    let _sd = sx + childWidth;
    if (_sd >= num) {
      _sd = num;
    }

    container.scrollBy({ left: _sd, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    const container = box.current!;
    const sx = container.scrollLeft;
    let _sd = sx - childWidth;
    if (_sd <= 0) {
      _sd = 0;
    }

    container.scroll({ left: _sd, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={box}
        className="flex overflow-x-auto py-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 snap-x"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingRight: '20px'
        }}
      >
        <div className="flex space-x-6 md:space-x-10 px-2">{children}</div>
      </div>

      {/* Left Button */}
      <div
        onClick={scrollLeft}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-md shadow-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:scale-105 transition-all"
      >
        <span className="text-xl font-bold">{'<'}</span>
      </div>

      {/* Right Button */}
      <div
        onClick={scrollRight}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-md shadow-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:scale-105 transition-all"
      >
        <span className="text-xl font-bold">{'>'}</span>
      </div>
    </div>
  );
};

export default ScrollXBox;
