import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
let site_id: string | null = null;
if (typeof window !== 'undefined') {
  site_id = localStorage.getItem('site_id');
}
export async function checkInspectionRound() {
  try {
    const result = await axios.get("/project-v0/inspection-round/check-inspection-round");
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function getShelfProducts(){
  try {
    const result = await axios.get(`/project-v0/product/get-shelf-product/${site_id}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function getItemByShelf (item_position:string){
  try {
    const result = await axios.get(`/project-v0/product/get-item-by-shelf`, {
      params: {
        site_id: site_id, 
        item_position: item_position
      }
    });   
    return result.data;
  } catch (error) {
    return error;
  }

}

export async function getItemDetail(body){
  try {
    const result = await axios.post(`/project-v0/product/get-item-detail`, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function countProduct(body){
  try {
    const result = await axios.post(`/project-v0/product/count-product`, body);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function getTotalCountAndCounted(){
  try {
    const result = await axios.get(`/project-v0/product/get-total-count-and-counted/${site_id}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

export async function getCountProduct(filters_item_position){
  try {
    const result = await axios.get(`/project-v0/product/get-count-product`,{
      params: {
        site_id: site_id, 
        filters_item_position: filters_item_position
      }
    });
    return result.data;
  } catch (error) {
    return error;
  }
}