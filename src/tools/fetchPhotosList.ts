const BASE_URL = 'https://api.unsplash.com/photos/?client_id=kQsHViBqZc8Y18HvgmbGWaKl_qTK8aQXMQ9a8uwhyVo';

export const fetchPhotosList = async () => {
  try {
    return await (await fetch(BASE_URL)).json();
  }  catch (error: any) {
    console.log(error);
  }

  return 0;
};