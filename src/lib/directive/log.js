/**
 * @file log相关的directive指令
 * v-log="{act:'link'}"
 * v-log.tab="'tab'"
 * v-log.btn="'btn'"
 * @see  ../log.js
 *
 * @author mengke01(kekee000@gmail.com)
 */

import Vue from 'vue'

Vue.directive('log', {
    bind: function (el, binding) {
        let val = binding.value;
        let actType = 'LINK'; // 交互类型
        if (binding.modifiers.tab) {
            actType = 'TAB'
        }
        else if(binding.modifiers.btn) {
            actType = 'BTN'
        }
        let className = 'WA_LOG_' + actType;
        // 设置交互class
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className = el.className + ' ' + className;
        }

        if (typeof binding.value === 'object') {
            val = JSON.stringify(val);
        }
        el.setAttribute('data-click', val);
    }
})
