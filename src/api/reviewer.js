import request from '@/utils/request'

export function getreepoch(reviewerid) {
  return request({
    url: '/api/reviewers/' + reviewerid + '/epoches/',
    method: 'get'
  })
}

export function getredoc(epochid) {
  return request({
    url: '/api/reviewers/epoches/' + epochid + '/docs/',
    method: 'get'
  })
}

export function getrelabel(docid, userid) {
  return request({
    url: '/api/projects/docs/' + docid + '/reviewer/' + userid + '/annotations/',
    method: 'get'
  })
}
