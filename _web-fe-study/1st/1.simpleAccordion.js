
class SimpleAccordion extends HTMLElement {

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

    /**
     * DOCUMNET 에 커스텀(가상) 요소가 처음 연결 될때 콜백. 
     */
    connectedCallback() {
        this.setAttribute('role', 'tablist');

        // 쉐도우 슬롯 잡기
        const tabsSlot = this.shadowRoot.querySelector('.tabsSlot');
        const panelsSlot = this.shadowRoot.querySelector('.panelsSlot');

        // 해당 슬롯 안으로 들어온 아이들을 통해 조작하기 위해
        // assigneNodes :: 해당 슬롯에 할당된 노드들을 반환(Array)
        this.tabs = tabsSlot.assignedNodes(); //[button, button, button]
        this.panels = panelsSlot.assignedNodes(); //[section, section, section]

        // 슬롯 값 세팅
        this.panels.forEach(function(panel){
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('tabindex', 0);
        })

        // 초기 탭 활성화(selected 변환)
        this.selected = this._findFirstSelectedTab() || 0;
        this._activeTab();

        // 클릭 이벤트 이벤트로 전달받는 this 를 클릭이벤트받은 요소가 아닌, class this를 쓰겠다 
        this._boundOnTitleClick = this._onTitleClick.bind(this);
        tabsSlot.addEventListener('click', this._boundOnTitleClick);
    }

    /**
     * DOCUMNET 에서 커스텀(가상) 요소가 연결이 끊어질때 콜백, 걸었던 이벤트 죽이기
     */
    disconnectedCallback() {
        const tabsSlot = this.shadowRoot.querySelector('.tabsSlot');
        tabsSlot.removeEventListener('click', this._boundOnTitleClick);
    }
    /**
     * Invoked when one of the custom element's attributes is added, removed, or changed.
     */
     attributeChangedCallback() {
        console.log("change Atr");
     }
    /**
     * 클릭시 탭 활성화(selected 변환)
     */
    _onTitleClick(e) { 
        // 현재 활성화된 타겟의 순서 selected에 반환
        this.selected = this.tabs.indexOf(e.target);
        this._activeTab();

        e.target.focus();
    }

    /**
     * html 초기 selected 탐색(따로 지정안했으면 0으로 설정했음 위에서)
     */
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

    /**
     * 활성화할 탭
     */
    _activeTab() {
        for (let i = 0, tab; tab = this.tabs[i]; ++i) { // tabs만큼 순환함
            let select = (i === this.selected);
            tab.setAttribute('tabindex', select ? 0 : -1); // 같으면 0 다르면 -1 대입
            tab.setAttribute('aria-selected', select); // 같으면 true, 다르면 false 대입
            this.panels[i].setAttribute('aria-hidden', !select);// 같으면 panel show(hidden-false), 다르면 hidden(hidden-true)
        }
        this.setAttribute('selected', this.selected);
    }
}

// 위에 정의한 class를 <simple-tabs> 라는 이름으로 커스텀 엘리먼트 생성
customElements.define('simple-accordion', SimpleAccordion);