
class SimpleTab extends HTMLElement {
    selected_ = null;

    constructor() {
        // HTMLElement
        super(); 

        // shadow root 생성
        let shadowRoot = this.attachShadow({mode: 'open'});
        // shadow tree 구성
        shadowRoot.innerHTML = `
            <div class="tabs">
                <slot class="tabsSlot" name="tab"></slot>
            </div>
            <div class="panels">
                <slot class="panelsSlot" name="panel"></slot>
            </div>
            <style>
                :host {
                    display: block;
                    max-width: 1024px;
                    background-color: blue;
                    padding: 10px;
                    margin: 0 auto;
                }
                .tabs {
                    display: flex;
                }
                .tabs ::slotted(*) {
                    flex: auto;
                    width: auto;
                    font-size: 16px;
                    text-align: center;
                    cursor: pointer;
                    border-radius: 5px 5px 0 0;
                    border: none;
                    background: linear-gradient(#fafafa, #eee);
                    padding: 16px 8px;
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .tabs ::slotted([aria-selected="true"]) {
                    font-weight: 600;
                    background: white;
                    box-shadow: none;
                }
                .panels {
                    height: 250px;
                    border-radius: 0 0 5px 5px;
                    background: #fff;
                    padding: 20px;
                    overflow: auto;
                }
                .panels ::slotted([aria-hidden="true"]) {
                    display: none;
                }
            </style>
        `;
    }
    
    // selected_ 프로퍼티 사용할때 호출됨 (set 있으니 get도 우선 만들어준것)
    get selected() {
        return this.selected_;
    }

    // selected_ 프로퍼티 변경할때 호출됨 (this.selected = 값변경[idx])
    set selected(idx) {
        this.selected_ = idx;
        this._activeTab(idx);

        this.setAttribute('selected', idx);
    }

    // DOCUMNET 에 커스텀(가상) 요소가 처음 연결 될때 콜백. 
    connectedCallback() {
        this.setAttribute('role', 'tablist');

        // 슬롯 잡기
        const tabsSlot = this.shadowRoot.querySelector('.tabsSlot');
        const panelsSlot = this.shadowRoot.querySelector('.panelsSlot');

        // 슬롯 내 요소 노드 할당(슬롯 요소조작 하려고)
        this.tabs = tabsSlot.assignedNodes();
        this.panels = panelsSlot.assignedNodes();

        // 슬롯 값 세팅
        this.panels.forEach(function(panel){
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('tabindex', 0);
        })

        // 초기 탭 활성화(selected 변환)
        this.selected = this._findFirstSelectedTab() || 0;

        // 클릭 이벤트 this = this._onTitleClick
        this._boundOnTitleClick = this._onTitleClick.bind(this);
        tabsSlot.addEventListener('click', this._boundOnTitleClick);
    }

    // DOCUMNET 에서 커스텀(가상) 요소가 연결이 끊어질때 콜백, 걸었던 이벤트 죽이기
    disconnectedCallback() {
        const tabsSlot = this.shadowRoot.querySelector('.tabsSlot');
        tabsSlot.removeEventListener('click', this._boundOnTitleClick);
    }

    // 클릭시 탭 활성화(selected 변환)
    _onTitleClick(e) { 
        // 현재 활성화된 타겟의 순서 selected에 반환
        this.selected = this.tabs.indexOf(e.target);
        e.target.focus();
    }

    // html 초기 select 반환(따로 지정안했으면 0으로 설정했음 위에서)
    _findFirstSelectedTab() {
        let selectedIdx;
        this.tabs.forEach(function(tab, i){
            tab.setAttribute('role', 'tab');
            if (tab.hasAttribute('selected')) {
                selectedIdx = i;
            }
        })

        return selectedIdx;
    }

    // 전달받은 활성화할 탭 idx 적용
    _activeTab(idx = null) {
        for (let i = 0, tab; tab = this.tabs[i]; ++i) { // tabs만큼 순환함
            let select = (i === idx);
            tab.setAttribute('tabindex', select ? 0 : -1); // 같으면 0 다르면 -1 대입
            tab.setAttribute('aria-selected', select); // 같으면 true, 다르면 false 대입
            this.panels[i].setAttribute('aria-hidden', !select);// 같으면 panel show(hidden-false), 다르면 hidden(hidden-true)
        }
    }

}

// 위에 정의한 class를 <simple-tabs> 라는 이름으로 커스텀 엘리먼트 생성
customElements.define('simple-tabs', SimpleTab);