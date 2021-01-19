import { getRequest } from 'util/Axios';
import { getToken } from 'util/Token';

class RiderControlMapRepository {
  deliveringList = async (date: string) => {
    const data = await getRequest({
      url: `/delivery/delivering?date=${date}`,
      token: getToken(),
    });
    console.log('dataatatatata', data);
    return data;
  };
}

export default new RiderControlMapRepository();
