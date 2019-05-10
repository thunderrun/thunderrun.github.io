const imageUrls = [
  "https://cyawra.bn.files.1drv.com/y4m6oOFBm4cdqKoN6QvTODcFz43QaqvhpuaB-Axn1vHaYWnvEyG9Jm_57Pdo9xqDb4p_TDClmshK5tatgACL-_Xulu55OP-7bqMNUv_YgTDa-GvD3McsJ0lOulE0lrdSTIoMVN7lOPr-ZUG9nqXnM-ylGMUWIs7e9ulFp3YKob0aTN0Pyp4Zg2C72qiRECNlf596-88-X2Pn4Yy4d5GuHrJLQ?width=5120&height=2560&cropmode=none",
  "https://ciawra.bn.files.1drv.com/y4mYHTbeIp6dLQ5IvgKgLyc37VCnsBjl0pMFxE7BksdjIHsooNzg9ZH7-rKoiNcUyvrVahfpTbjTIEIUXBugt_bcf9OMPfDf3aTD49opI8s_zsof36-rmYA5QKZh3hyFJKH7uST7Hd8u0Q9FkliNs_Yy3S2znIj5JEaegylII2cHjtpXKYL8lrFWqAdorEboaZ8GZ5kW551GvlgeK2EsJSmDA?width=3648&height=1824&cropmode=none",
  "https://p4wwra.dm.files.1drv.com/y4ma9DXvzSSV69G0wSxB3vcXVK5hb0a695s5vOeo1s9kKbGj92gLb8GqLzWWpcnufzHP3WKQRP_zMwPSoF7SObOINXyrUb2wQf1_kGWseurNAfcnIaNpJIK9Mp5Q8cTH79-nxUmfDDAyYjSAl6HQIltwWFj2n4rJZOqL8tZSR0FkFPObCADpFD6-zk4_i7M1g1lMqng_2tKhh4Y2w-vjyoN6w?width=5120&height=2560&cropmode=none",
  "https://bibt3a.bn.files.1drv.com/y4mFTWkd-M-LWpEenq0YdRPaqJn0fHYnUQZUQDozvauVnJTYE54uMRZdRiddapdUwSkQ-odZrdQolMbJUUMLpffkYDMH8pI-dsRp5UAT_ArAk4rutF-ScABEN4UkwLlfkb38NE-MRgOgf9Y23OaDbyRbVOFCX6wPHMKiqMtprUYSEucGvrw7T-NfD16gBaQCrp-M33-yy29A-YbUyZ0FBtEjw?width=5120&height=2560&cropmode=none"
];
const imageUrl = imageUrls[Math.floor(Math.random() * 4)];

document.body.style.backgroundImage = `url('${imageUrl}')`;
