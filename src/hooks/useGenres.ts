import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import genres from '../data/genres';
import apiClient from '../services/api-client';
import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
