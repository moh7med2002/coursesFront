import React from 'react'
import Layout from '../components/Layout';
import HeaderLand from '../components/home/HeaderLand'
import Categorieshome from '../components/home/Categorieshome';
import SomeCourses from '../components/home/SomeCourses';
import RegisterBanner from '../components/home/RegisterBanner';

export default function Home() {
    return (
        <Layout>
            <HeaderLand/>
            <Categorieshome/>
            <SomeCourses/>
            <RegisterBanner/>
        </Layout>
    )
}
