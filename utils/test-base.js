import { test } from '@playwright/test';

exports.customTests=test.extend(
    {
        testDataForOrder:{
        username:"Admin",
        password:"admin123"
        }
    }
)