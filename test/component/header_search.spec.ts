import { shallowMount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import HeaderSearch from '@/components/headerSearch.vue';

describe('HeaderSearch.vue', () => {
    describe('mouting a component', () => {
        it('renders header search component', () => {
            const wrapper = shallowMount(HeaderSearch)

            const component = wrapper.find('.search')

            expect(component.classes()).toContain('search')
        })
        it('the search function it is beig called', async () => {
            const wrapper = shallowMount(HeaderSearch)

            const calledClick = wrapper.find('#search')

            expect(calledClick.text()).toBe('Buscar')
        })
    })
})
