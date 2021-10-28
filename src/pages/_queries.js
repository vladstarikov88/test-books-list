import axios from '@/plugins/axios';
import dayjs from 'dayjs';

export const getBooks = () => {
  // with different api I could use more better way
  return axios.get('Books')
    .then(res => res.data.map(book => ({
      id: book.id,
      title: book.title,
      description: book.description,
      publishDate: dayjs(book.publishDate).format('YYYY-MM-DD HH:mm'),
    })))
}

export default {
  getBooks,
}