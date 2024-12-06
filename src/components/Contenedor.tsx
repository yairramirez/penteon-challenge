import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Card } from './Card';
import { SkelletonLoader } from './SkelletonLoader';

import { Fact, User } from '../interfaces/interfaces';
import { getFacts, getUsers } from '../services/DataService';

export const Contenedor = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);
  const [facts, setFacts] = useState<Fact[]>([]);


  const getUserData = async ( page: number ): Promise<void> => {
    try {
      const { data } = await getUsers( page );

      if ( page === 1 ) {
        setUsers( data );
      } else {
        setUsers( (prevUsers) => [...prevUsers, ...data] );
      }
    } catch (error) {
      console.log('getUserData error', error)
    }
  };

  const getFactsData = async ( page: number ): Promise<void> => {
    try {
      const { data } = await getFacts( page );

      if ( page === 1 ) {
        setFacts( data )
      } else {
        setFacts( (prevFacts) => [...prevFacts, ...data] );
      }
      
    } catch (error) {
      console.log('getFactsData error', error)
    }
  };

  const fetchData = async (): Promise<void> => {
    try {
      await Promise.all([getUserData( page ), getFactsData( page )]);
      setPage( page + 1 );
    } catch (error) {
      console.log('fetchData error', error)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <InfiniteScroll
        dataLength={users.length}
        next={fetchData}
        hasMore={true}
        loader={<SkelletonLoader />}
      >
        {
          (users.length > 0 && facts.length > 0) ? (
            <Card users={ users } facts={ facts } />
          ) : <SkelletonLoader />
        }
      </InfiniteScroll>
    </div>
  )
}
