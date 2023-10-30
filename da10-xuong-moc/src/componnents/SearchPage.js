import React from 'react'
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
    const [searchParams] = useSearchParams();
  return (
    <div>{searchParams}</div>
  )
}

export default SearchPage