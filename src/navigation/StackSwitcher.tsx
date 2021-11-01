import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import BottomNav from './BottomNav';

export default function StackSwitcher() {
    const token = useSelector((state) => state?.token);
    return token?.tokenVal ? <BottomNav /> : <AuthNav />;
}
