'use client'
import {useEffect} from 'react'
import Image from 'next/image'

import styles from '../css/Intro.module.css'
import HeaderStyle from '../css/header.module.css'
import logo from '../imgs/logo_color.svg'
import overview from '../imgs/overview.svg'

export default function Intro(props){

    useEffect(() => {
        const CostmerApplyBtn = document.querySelector(`.${styles.costmer_apply}`)
        const BrandApplyBtn = document.querySelector(`.${styles.brand_apply}`)

        const toCostmerApply = () => {
            props.setState(`${HeaderStyle.costmer_apply}`)
        }

        const toBrandApply = () => {
            props.setState(`${HeaderStyle.brand_apply}`)
        }

        CostmerApplyBtn.addEventListener('click', toCostmerApply);
        BrandApplyBtn.addEventListener('click', toBrandApply)

        return () => {
            CostmerApplyBtn.removeEventListener('click', toCostmerApply)
            BrandApplyBtn.removeEventListener('click', toBrandApply)
        }
    })

    return (
        <div className={styles.main}>
            <div className={styles.first}>
                <div className={styles.mid}>
                    <div className={styles.imgWrap}><Image className={styles.img} src={logo} alt=''/></div>
                    <p className={styles.message}>
                        일상속 진정한 가치소비의 시작
                        <b className={styles.line}>우리 모두를 위한 <b className={styles.app_name}>샛별</b></b>
                    </p>
                    <div className={styles.buttonWrap}>
                        <div className={`${styles.button} ${styles.costmer_apply}`}>서비스 사전신청</div>
                        <div className={`${styles.button} ${styles.brand_apply}`}>브랜드 입점신청</div>
                    </div>
                </div>
            </div>
            <div className={styles.second}>
                <Image className={styles.overview} src={overview} alt=''/>
            </div>
        </div>
    )
}