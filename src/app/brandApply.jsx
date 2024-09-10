'use client'
import { useEffect } from 'react'
import styles from '../css/BrandApply.module.css'

export default function BrandApply() {

    let brand_type = 'normal_brand'

    useEffect(()=>{

        const brandNameInput = document.querySelector(`.${styles.input_brand}`)
        const telInput = document.querySelector(`.${styles.tel}`)
        const emailInput = document.querySelector(`.${styles.email}`)
        const productUrl1Input = document.querySelector(`.${styles.product_url_1}`)
        const productUrl2Input = document.querySelector(`.${styles.product_url_2}`)

        const normal_brand = document.querySelector(`.${styles.normal_brand}`)
        const eco_brand = document.querySelector(`.${styles.eco_brand}`)

        const applyBtn = document.querySelector(`.${styles.apply}`)
        const toNormalBrand = () => {
            console.log("To Normal : ", brand_type)
            eco_brand.classList.remove(`${styles.selected}`);
            normal_brand.classList.add(`${styles.selected}`);
            brand_type= 'normal_brand'
            
            console.log("To Normal : ", brand_type)
        }

        const toEcoBrand = () => {
            
            console.log("To Eco : ", brand_type)
            normal_brand.classList.remove(`${styles.selected}`);
            eco_brand.classList.add(`${styles.selected}`);
            brand_type = 'eco_brand'
            
            console.log("To Eco : ", brand_type)
        }

        const submit = () => {
            let data = {
                brand_name : brandNameInput.value,
                brand_type : brand_type,
                tel : telInput.value,
                email : emailInput.value,
                productUrl1 : productUrl1Input.value,
                productUrl2 : productUrl2Input.value
            }

            console.log(data)

            fetch('https://stac-nine.vercel.app/api/addBrand', {
                method : 'POST',
                body : JSON.stringify(data)
            })
            .then((response) => {
                
                alert("브랜드가 등록되었습니다...!!")
                if(response.ok) return response.json()
            })
            .then((result) => {
                console.log(result)
            })
        }

        normal_brand.addEventListener('click', toNormalBrand)
        eco_brand.addEventListener('click', toEcoBrand)
        applyBtn.addEventListener('click', submit)

        return () => {
            normal_brand.removeEventListener('click', toNormalBrand)
            eco_brand.removeEventListener('click', toEcoBrand)
            applyBtn.removeEventListener('click', submit)
        }

    },[])

    return (
        <div className={styles.main}>
            <form className={styles.page} action='/'>
                <div className={styles.title_wrap}>
                    <div className={styles.title}>브랜드 입점 신청</div>
                    <div className={styles.boon}>브랜드 사전 입점시 다양한 혜택이 제공될 예정입니다</div>
                </div>
                <div className={styles.brand_name}>
                    <input className={`${styles.input} ${styles.input_brand}`} id="brand_name" placeholder='브랜드명을 입력해주세요'/>
                </div>
                <div className={styles.select_brand_type}>
                    <div className={`${styles.brand} ${styles.normal_brand} ${styles.selected}`} id='normal_brand'>일반브랜드</div>
                    <div className={`${styles.brand} ${styles.eco_brand}`} id='eco_brand'>환경브랜드</div>
                </div>

                <div className={styles.show_policy}>
                    <div className={styles.check}>입점기준 확인하기</div>
                    <div className={styles.policy}>
                        1.<br />
                        2.<br />
                        3.<br />
                        4.<br />
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={`${styles.inputWrap}`}><input className={`${styles.input} ${styles.tel}`} placeholder='연락처를 입력해주세요' type="tel" pattern='(010)-\d{3,4}-\d{4}'/></div>
                    <div className={`${styles.inputWrap}`}><input className={`${styles.input} ${styles.email}`} placeholder='이메일를 입력해주세요' type="email" pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$'/></div>
                    <div className={`${styles.inputWrap}`}><input className={`${styles.input} ${styles.product_url_1}`} placeholder='상품 상세페이지 URL (1)' type="url" pattern='https?://.+'/></div>
                    <div className={`${styles.inputWrap}`}><input className={`${styles.input} ${styles.product_url_2}`} placeholder='상품 상세페이지 URL (2)' type="url" pattern='https?://.+'/></div>
                </div>

                <div className={styles.agree}>
                    <div className={styles.agree_input_wrap}>
                        <input className={styles.agree_input } type='checkbox' id="message"/>
                        <label className={styles.label} htmlFor='message'></label>메신저 수신(선택)
                    </div>
                    <div className={styles.agree_input_wrap}>
                        <input className={styles.agree_input } type='checkbox' id="personal"/>
                        <label className={styles.label} htmlFor='personal'></label>개인정보 수집 및 이용동의
                    </div>
                </div>
                <div className={styles.noticeWrap}>
                    <p className={styles.notice}>상품페이지는 IR 피칭의 자료로 사용될 수 있습니다</p>
                </div>
                <div className={styles.applyWrap}>
                    <div className={styles.apply}>신청확인</div>
                </div>
            </form>
        </div>
    )
}