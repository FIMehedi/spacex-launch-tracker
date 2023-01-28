import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import {
  setFindItems,
  setSearchTerm,
} from '../../../features/launchers/launchersSlice';

export default function Search(): JSX.Element {
  const dispatch = useAppDispatch();
  const { searchTerm } = useAppSelector(
    (state) => state.launchers.searchAndFilter,
  );

  const { isSuccess, data } = useGetLaunchesQuery();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setFindItems(data));
    }
  }, [searchTerm, isSuccess, data, dispatch]);

  return (
    <div className="relative">
      <input
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        type="text"
        placeholder="Search by flight or mission name"
        className="bg-[#444] rounded py-1 px-2 text-emerald-400 outline-none font-medium w-200 sm:w-[280px]"
      />
    </div>
  );
}
