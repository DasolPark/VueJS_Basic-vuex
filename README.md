# Vuex

## Store

- state: 저장소(like component's data)
  - state: { name: data } in **store.js**
  - 1.this.$store.state.name Or
  - mapState (import { mapState } from 'vuex')
  - ...mapState(['', '']) 
  - ...mapState({ users: 'allUsers' }) in component's **computed**: {}

## Getters

- getters: 중복 코드 제거(component's computed)
  - 다른 점은 어떤 값을 사용하겠다는 것을 알려줘야 한다( function(state) => {} 처럼 parameter에 원하는 값을 넣는 것 중요)
  - 짜임새 있게 이용할 것
  - 하지만, $store.getters도 반복된다.
  - getters: { name: func } in **store.js**
  - this.$store.getters.name Or
  - mapGetters (import { mapGetters } from 'vuex')
  - ...mapGetters(['a', 'b', 'c']) 
  - ...mapGetters({ count: 'usersCount' }) in component's **computed**: {}

## Mutations

- state를 변화시키고 관리(동기)
  - 각 컴포넌트에서 state를 변경시키면, 중복이 많아짐
  - 기능을 정의해놓고 각 컴포넌트에서 mutation에 정의해놓은 기능을 **commit**으로 실행
  - mutations: { name: func(**state, payload**) } in **store.js**
  - this.$store.commit('funcName', parameters) Or
  - mapMutations (import { mapMutations } from 'vuex')
  - ...mapMutations(['a', 'b']) 
  - ...mapMutations({ add: 'addUser' }) in component's **methods**: {}
  - Mutations를 map없이 직접 사용(commit)하는 방법: this.$store.commit('funcName', payload)
  - 단점은 **동기**로 동작한다는 것
  - 컴포넌트가 많을 때, 각 컴포넌트에서 Mutate하면 순서를 알 수 없음

## Actions

- Mutations를 넘어가기 전에 비즈니스 로직을 넣는 곳
- 결국 state를 변화시킨다는 점에서 mutations와 같지만 다르다
- 규모가 클수록 큰 효과를 발휘
  - actions: { name: (context, payload) => {} } Or 
  - { name: ({ commit }, payload) => {} } in **store.js**
  - import { mapActions } from 'vuex';
  - ...mapActions(['a', 'b']) 
  - ...mapActions({ add: 'addUser' }) in component's **methods**: {}

## 순서

state 'render' ➡ component 'dispatch' ➡ actions 'commit' ➡ mutations 'mutate' ➡ state