import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

export const SkelletonLoader = () => {
  return (
    <div>
      <div className="flex flex-nowrap">
        <Skeleton />
        <Skeleton />
      </div>
      <br />
      <Skeleton count={ 2 }/>
    </div>
  )
}
