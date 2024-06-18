import { apiResquest } from '../../utils/http.js'
  
  
// 新增想法
export const addIdea  = (query) => {
    return apiResquest({
        url: '/issuePage/idea/add',
        method: 'POST',
		query:query
    })
}

// 查询行业列表
export const industryList  = (query) => {
    return apiResquest({
        url: '/config/industry/list',
        method: 'POST',
    })
}