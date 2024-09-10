'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import styles from '../css/header.module.css'
import logoSVG from '../imgs/logo.svg'

export default function Header(props){

    useEffect(() => {

        const introButton = document.querySelector(`.${styles.intro}`);
        const costmerApplyButton = document.querySelector(`.${styles.costmer_apply}`)
        const brandApplyButton = document.querySelector(`.${styles.brand_apply}`)

        function introClick() {   
            props.setState(`${styles.intro}`)
        }

        function costmerApplyClick() {
            props.setState(`${styles.costmer_apply}`)
        }

        function brandApplyClick(){
            props.setState(`${styles.brand_apply}`)
        }

        introButton.addEventListener('click', introClick)
        costmerApplyButton.addEventListener('click', costmerApplyClick)
        brandApplyButton.addEventListener('click', brandApplyClick)

        document.querySelector(`.${styles.selected}`).classList.remove(`${styles.selected}`)
        document.querySelector(`.${props.state}`).classList.add(`${styles.selected}`)

        return () => {
            introButton.removeEventListener('click', introClick)
            costmerApplyButton.removeEventListener('click', costmerApplyClick)
            brandApplyButton.removeEventListener('click', brandApplyClick)
    
        }

    }, [props.state])

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}><Image className={styles.logoImg} src={logoSVG} alt=""/></div>
                <div className={styles.app_name}>Morning Star</div>
            </div>

            <div className={styles.right}>
                <div className={`${styles.intro} ${styles.button} ${styles.selected}`}>서비스 소개</div>
                <div className={`${styles.costmer_apply} ${styles.button}`}>사전 신청하기</div>
                <div className={`${styles.brand_apply} ${styles.button}`}>브랜드 입점 신청</div>
            </div>
        </div>
    )
}