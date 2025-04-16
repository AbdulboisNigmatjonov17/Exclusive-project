"use client";
import RelatedItem from '@/components/cards/RelatedItem';
import Details from '@/components/detail/Details';
import Images from '@/components/detail/Images';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function DetailPage() {
  const params = useParams<{ id: string }>();
  const [param, setParam] = useState<string | null>(null);

  useEffect(() => {
    if (params?.id && !Array.isArray(params.id)) {
      setParam(params.id);
    }
  }, [params]);


  return (
    <>
      {/* Agar `param` null bo'lmasa, ekranga chiqar */}
      {param !== null ? (
        <div className='w-full flex justify-between my-20'>
          <Images param={param} />
          <Details />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <RelatedItem />
    </>
  );
}