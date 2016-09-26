<div id="sample_pipedrive_integration">
    <a id="pipedrive_icon" href="#contact_info_pipedrive_crm" class=""></a>
    <div id="contact_info_pipedrive_crm" class="requester_tab">
        <h3>Pipedrive CRM</h3>
        <div class="pipedrive_content">
        </div>
        <form id="deal">
            <input class="btn btn-primary" type="submit" id="submit" value="Create Deal">
        </form>
         <form id="deal-update">
            <input class="btn btn-primary" type="submit" id="submit" value="Update Deal">
        </form>
    </div>
</div>
<style>
    .pipedrive_content{
        padding-top: 10px;
    }
    #new_pipedrive_contact{
        border: none;
        background: #FFF;
    }
    #contact_info_pipedrive_crm, #new_pipedrive_contact{
        display: none;
    }
    #pipedrive_icon{
        /* display: none; */
        width: 20px;
        height: 18px;
        background-size: 23px 16px;
        background-repeat: no-repeat;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdDRjFDQzA5QjA5MTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdDRjFDQzE5QjA5MTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNDBCNTkxQjlBQjkxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNDBCNTkxQzlBQjkxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkuJXYcAAAUuSURBVHja7FhJbBtVGH6zeRknsWMTx2silFRKaqI2dVMKlVCROFe9wKHiAIcicUACekPKgUU9coATB8oJgcQBcUFqBULqgkCiSagi7KgI2XXi2LGdxNt4mbGH7/cSOW0iWnWcFilPep7xe8+e733/9y9vOF3X2dPcePaUt0OAhwCfdBMfZtH8/PyruAyh6wIvMKWisMXFxYLP5//V5/Mml5f/Ylar5SjHcS8Xi4UXqtXaJO5FtDWTyfQb7q+DiT8CwUDN4/UySRSZJEns/UuXjAF49eq1z3DxtL9xhJPxgsByudzPbrf7ItP1s+l0+sN6vR5sreC47k/D6OcAtChbLd8gpH0iCELCcAbBgnL/WBPxc3t7+2wkEvmhVCo9W61WB4iVvZqmaYO5ze23JFPi2LDT9YbDYY8arcEHojnfZknIZDIzqqoOYBPthQDe7TtreZ6ZzSa2vp56HtL4Qq3X3WDSUIC2/SaINTJpo9FogYI5NzGW5SCFZrO5a63ZbGYb6fRLkejKxXK5zBkGEAxcxo4/xvXPByYBDiZksizf8Xq9b4dCofD09PTxQMD/OoDe1ntA0kYEbCgej78JSYwbpkG0z8lMYMgHpo71OAGrVipsbGxsYea50IVYLL4CBrsa/drj8d4sl0rf5TZzc12TCvgfRVEmVK1xBl9jRjFI3QSA5l2OAnYAqDYTCn3qcrlWiEkyM43LspUN2OR4IBC4jDVKV5MtFgEWzvWikSbec5x0NzQ0FKmr6vXE6mpLj7SWxh12O4O3MpvNem3AZlvu1SOtgeefMNLEezZiAoxkYvFYVgMoURBZPp8HKBvTVI1pdY1xPKcIghiDKE71ahExc7jvAFsP4/mS1mhqzabO6o06U2FmyhS9JrU77Goms9EK7t1QJEmi1HeA9CAY32qzWgWYVW1pFYDMJonVwGATrBJAmJPHRnYyDDGPDal9LxYIYKOpu2DSIYvV0g43ViuDJlt69Pn97JmRER7mbwdmWg/Q8GxWq1TyfQdIjFSrypQoiacRB1kSjkJNAYCtbBYONMjGx4JzW7nc8SK0uYmxXDrNUmtrbNTtvn0gToKAO3jvXvwdr9d/A6xttXI3Msbd6F1yELlYLH6wnki4yMTEIG2KDB0MBm8dCIMms4WlUplXopHolUZDOw3QIsYF2SaHk2vJr+4sLZ2jbEP6FOA81VqN+QOBf6amp271hcFWTOTaeVar14lB0hNLVyrnJZPpTLFQvIc5HcwFEUpGgXcnjpJmMcZmw+EvRz2emGEAu95HnyqBAgtVRWkBJKA0TyEETjKysbExwnUZu69iAWg2Ozv705Ejk1cIqGEArSilCADErqeTyR0d0RVprAlgPHknASLv7Y2BtIFupYN0+PvJU3PvjY+NpZCPjQMo4sGiJOnUKLZJndqvlYsFYWFkeHihkM+/plQqDhrrgqSwI7bL+5J71P29wzH8kUky/Q2tGltR6x39dMurXj1WFCXlcjrfPRE++S28+TxK1aPZbM5jlqSGbXBwFRuKen2+H3VOv1kuluuP+ibjsVMdQNpQ3zUnJiZ/cTqdN5BK7Pl8QbbIsg6TlrCBgt1ub6Lk6t+p7r9iIUwpIZ3VGsjJoDsHlnJ6J2t0NfhEz8VUyi8tLeKUl2X7HZz6ei5+2PiIEEMnQNwLhgE09M0ChZVEIsFqtWrv2fjAAHL7rOc7cztM1hDIqewyAuSjmJhqdnLFfKdTG0BPdeZ2xU2cl6mYZTZUOY9llcM3rIcADwH+zwH+K8AAnPt1DeTkyL8AAAAASUVORK5CYII=);

    }
    #pipedrive_person_details, #pipedrive_activities, #pipedrive_deals{
        padding-bottom: 10px;
    }
    .activities_heading, .deals_heading{
        font-size: 14px;
        font-weight: bold;
        padding-bottom: 5px;
    }
    #pipedrive_person_details .person_name{
        font-size: 14px;
        font-weight: bold;
    //color: #004080;
        padding-bottom: 5px;
    }
    #pipedrive_person_details .organization_name{
        font-size: 14px;
    //color: #004080;
        padding-bottom: 5px;
    }
    .activity_details, .deals_details, .product_details{
        padding-bottom: 5px;
    }
    .product_details{
        padding-left: 10px;
    }
    .followers_count .followers_count_label{
    //font-weight: bold;
    }
    .deal_status{
        padding-left : 27px;
    }
    .date_and_time{
        color: #999;
    }
    .product_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTIyREUxOTc5QTE2MTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTIyREUxOTg5QTE2MTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjJERTE5NTlBMTYxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjJERTE5NjlBMTYxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm874s4AAAGJSURBVHja7Nc5SwNBGMbxxKPSJq0QAiKksrCw8Cg9PoCFghcIWljI2ug38ArIgoKloqKFEsRKEbRbFMTCOgaMhYLBSgMWMf4H3m1CZDezuwZ0B35FJrPzPntkZhMtlUqRWra6SI1bGKChvMM0zUALGobxN25BC+Zxh3ssSF+gAZoxijPksI4OtGMVT7jApIz1JUA9BrCHZ+xjUPorzdWHHbw4jHUVYEbO9Bxj1ZwVransak3rBDjABE5Q1Li96pi0zHGoE0Al78cc2rCCvIvCr1hCq/rVyRw5nQAxLOIBy3Il4pjCbYXxNxiXMadYQ1bmiHn5FTRiBNe4xDu6hLpN2+hELz5xJWOHKy10jiuhQ7MLP2ITs9KvHrJjJDwvxS6bKpTCh3xOhbthGCAMEESANx/r5HUCxGWhyXgonJE5EjoBCthCEkOwqihsyTFJmaPg5Rn4km21Rxz9sD0X5btuGZeWY31dii1hb7X2UryhXqhl9/uVvSAr7wl229V9SKLhf8N/H+BbgAEADy1VojNwDCQAAAAASUVORK5CYII=);
    }
    .deal_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzQzNDRTE5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzQzNDRTI5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODNDM0NERjlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODNDM0NFMDlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppp52tsAAAJLSURBVHja5JdNSFRRFMdnNBOMdCBFBMnARVbuSgRFDQUFF1FBy9RFthhHmAxdKH6hLgqlKfygRV8QLVwFBoKQHzMLCXJRRAtpIEIrWkhZbjQd/xf+i8vjnTdzxxkm8sCPN3Pux/u/e8859z13JBJxpdLSXCm2I1ZHIBBI6g39fv+/tQImAkbBLzAOjtJ3EQTBkDbXNfAJhO1WOOoWONhj0AHawCb4DCY4RxU4S5HPKbAb/E2kgI9gDjSALj6xW2u/Ci5xTiVwKhlZcI/XdMvNrQ/0EPxMhoA5roSTbWtCEy5AVa1oefoMfEuWgNOgIkqfPFCaaAGZYAx8AC1R+l4G75iuxxIhIAe8Zgpas+YPuAC+28yr0nWJKxK3APXkL0GlTdtb8ACsgCdCcJ4HMyArXgGDrHZWuwHKwAj/93Hf/TZ9y7V+RgIKwC0b/yJ4BLzgC31qFWrBff62mg+cNBXQqtV83cK8lmox4eHN1VbkCwXqpqmARsFfxz31MeJdPBfOMUMKhXH1pgLOCP5TrIjVIERfDSjhYbQrjCs2FeCUwyorFsCqtlrroNMh4LJNBfwQ/CoIe8EWOEHfFIuPsllh3FdTASHB/wYMM+h0+81rkTAuaCpgUvB7ud894Ap9txkHqmr2m8znJECV0Rc2/uNgGQyAHfpULDSD90LwPuUY40rYLuydh0/6iv9nuCV2xWZNKGgxCdgA18Ge0K7qwTTIFdpVSjY5vR3FchrOgztCWwbfgqXD5i7T9cAvpd3k//s0cx/6j9OUC9gXYABAwG2yQVhzpgAAAABJRU5ErkJggg==);
    }
    .call_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTIyREUxOUI5QTE2MTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTIyREUxOUM5QTE2MTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjJERTE5OTlBMTYxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjJERTE5QTlBMTYxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjk+c8oAAAGFSURBVHjaYvz//z/DQAImhgEGow5gQReYMGECzS0tKCgYOlEgB8T7gfgXEJ8HYkN6OkAGiA8CsQMQswKxAdQxpvRywEIgVkAT4wfi3UBsRA8HWOEQBzliHj0ccAOPnDa1EjA+QxrxyJ0B4n+0dsAGID6GRfw5EMfSKxuWoPn0HjRX3KGXA44D8WQkviQQq9C7LqgG4mtQNicQrwfiAHo64CsQBwPxZyifDYhXAXEYPWtDUJZMBmJY6wVUMi6jRmIkJS+vBuIqJD4zEC8A4lQc6jlp0R7oAOIWNP0zgTgbSUwPWk58g6YdfZLaA0SAWiD+DnUIIxRPhvp4JxDvA2JhqFpNIN4LxM5AfJGaLaI2aND/hfJBjuiG1pbCaGqFoRWYLrWbZHOB2BeI36JZhg2IAvFUWrQJt0MbKYeJUKtLCweAwGMgdgLiVmjLCRc4SMtW8R8groGGxm4c5UgqPZrloGznBi05QezfQLwJiB2B+DW1siExYB0UD/6OCeNo53SgHQAQYAD+FEhtomE2TQAAAABJRU5ErkJggg==);
    }
    .deadline_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzQzNDRDk5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzQzNDREE5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODMyMDBGMDlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODNDM0NEODlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjpZ4YsAAAEQSURBVHjaYvz//z/DQAIWbIITJkygmYUFBQUofCaGAQaEHLAdiB8CsThdowAJeEBpI6hjmIE4FIhDgFgBiL8D8VkgXgbEp4jw6D9SQwBZnQwQnwfi5UAcDMTGQGwDxPlAfBKI1wGxFha9llB5XnJCABmAfKyLRz4Qiq8D8VVo6IBCTpuSKCAHaEIxVRLhgOeCUQeMOmDUAQNTHRMA96DF7n1o8aoHxH5AzENrB3wC4hQgXgDEf9HkBIC4BohzgZgNTe4jELcA8WdKHXAJirGBD0BcAsRdQOwDxDpQs0Hq1wLxe3rVBa+AeN5oLhh1wKgDaOGA/wPlgD1A/Aza9B6QusB12KcBxoHuHQ94CAAEGAA+ZC/ytNtipgAAAABJRU5ErkJggg==);
    }
    .email_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgzQzNDREQ5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgzQzNDREU5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODNDM0NEQjlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODNDM0NEQzlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkXLA1kAAAGqSURBVHja7NfLR0RhGMfxmXRXFEkXQ8xuEhnqv4gWNVEZ2swiqUO6aNGNJFpM0qJFiiiVFtGf0CpFRKP7okWLJK3azJzT9+UZovMOczlnqHn5mJkz73mf37m974zXsixPPluRJ8+tECDvAYqTb6LRqOvFDcP4dQa8mMcHLAe8YsT2DEibxJyDB92AdXxhy+4eGHPp7C/qbsJGlwI06QLsIO5w8bjUsQ0whAB2kchx4YSMG5A6tgH8uEcYrdiDmWVhtf++jBeW8f26ADFswodbDKANhxkEUf2PZP9+Gc8n48d0AUoQwZ2am1CPG/ShHcfyPKdqlvRT/UOyv3r81uToI1In5VRcLo/kI5ZRi2v0IIgTmyCWbA9KP9W/DisyzijK0l0LqjCNJ8zK5yt0owOn0k+9dsp29X0NFmQ/NblVZrsYJQd8xjgqcIkuuUzq9UICzvwIXJ3r1VCd0lU8YBileJNAhhRekkuW3mqYwUy2gQkcYBDNWS3HGbYWTBV+Ef2pAKZLdU1dgHOXApzpAoRkHv90qPA7ttGrewxfZB53rXkL/w3/fYBvAQYAFeBuecRVIL4AAAAASUVORK5CYII=);
    }
    .lunch_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjgzMjAwRUE5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjgzMjAwRUI5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODMyMDBFODlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCODMyMDBFOTlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr4GQhEAAAENSURBVHjaYvz//z/DQAImhgEGow5gIVbhhAkTSDK4oKCAJiHACMSHgPg/DnwYqoZmUeAJtYgVahEyZoeGqCstHRACxDOA+A8WuV9APBOIA2npAG0gvo5H/iYQq9HSAeJA/A6P/BcgFqWlAxgHQznATKYcZeUAFHwC4gtA/BePeRdp6YDnQKxDQM0bWkbBFSLUXKalA3YSoWYPLR2wF4hv4ZG/Ci2OaeYAUAmYAsTfsch9BeIMaFFN02wI8qENEK8D4n/QIngTVOwIrbMhDJwD4mAg/gDEj4DYf7RFNOqAUQfQywF10AYJDPMBsRaaWAEtywFOIBbE0gZAFuOgpQMqoZhqgHG0czrQDgAIMABadztV7LV9fgAAAABJRU5ErkJggg==);
    }
    .meeting_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjgzMjAwRTY5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjgzMjAwRTc5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjJERTE5RDlBMTYxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjJERTE5RTlBMTYxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpLn1CEAAAGeSURBVHja7NdNKARhHMfxHbFp25sbJbUHEQd5d3JQDl4OUkhKe1MOK1LuFLmsclakFCXl4EjKQQkHygGhKOSitEit71N/NU3PrJ2xu9Nmn/rU7Myzz/z2ef7zskY8Hvd52fJ8HrdcAM8D5P9sRKPRjJ88EolkzxK0YxcxfOAAvZkKMI4dtKIQfrRgAzPpDlCBWRg2x6fQnM4AfeZC1TQVbCglV4FNK05iDF2fOlTjHnv4dBvgOokAV6btANbQbdp3gy6cuVmCFbwlOP6FJdPnacvJVSvDFgrcBHjAAN5tTj6Cc9O+fptxQqh3swSqbaMGY1LxKvQRFnBi6etPMI7fbYCAFNGc5lgRXixhhzX9nnDodAnUsTAupdB0VIENmr4zqZmVV1mamJMZaMIian+ZnSBWpf8EntGAHlRJDW3KDCR1GZZgXhIbDu4no2iU58Md1oXjG9GF/Co3TVX5MdpwKmFClj7qBXQZj3YBgr6/NVWUlRJAFWOHpk9Ynq63Xr0RlWPf61ey0txLqV0RGikcuzMrZsDI/Tf89wG+BRgA/MdNzpyP3OYAAAAASUVORK5CYII=);
    }
    .task_icon{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjgzMjAwRUU5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjgzMjAwRUY5QTUzMTFFNEEwMDU5NjMxRTAxMEJDNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODMyMDBFQzlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCODMyMDBFRDlBNTMxMUU0QTAwNTk2MzFFMDEwQkM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjAIrfAAAAJtSURBVHja5JddSFNhGMe3UdO+LsQr8UIqRApG1/OmEDOLJRZDBScUGEYo7TLyLqSJ3iwQMu1DRAtlMWVMKbWrQLstUAs3i0HQVTem6+SY/xf+k8M4Z+c9Z6NFvvDjOWfn/fif8zzv87yzp9NpWzGb/Z8REAwG/9qifr9//9phK3JzmOx7GTwBH8EWEJ/vF+9HwBWzL3VIsl8TGAA1Gs+OAhe5BT6De2CmEAKcYBjc5L0C3oEI33oHHOHiHlBPkWEwBm6D31YFOLlQA++nQS/Y0Oj7HjwGp8BD0ApugEoKU6zEwDAXT4EeTqpevBzUZY2JgzZwB/wBF8EjK0HYpPrswq9DGn0CYAmc03gmvkYnr4UbrpsR4GDAifYSvNAZe4z2hM7zcfCK1/167tYS0MBAUhjN+bT7nKcaNMoKuEYbBYk8BXwFb7PmNRRQS/umQMkuQuuWFXCSdq1AAj7RnpYVkAmunwYTJ2nvMmfotS1VXpESsE1bZiDgAdgEXjCVQ8RxVRaVEhCnPWsg4Bs4z+TUzPRbqtHPRRuTFbBMe1XCvwmKWGclHNTo46FdkRUQpq1nLjdq38EFMAs+ZD2rUtWSsKwAsW+/0KcByUj/QTdMZP3eB0r4+edlBaRUGbAD+CxuP59qrJhv10wxytRz0Z6DLpOLiwL2jNejIGSlHItFF8BhluZxiZiooPARunARdFs9kCgsy09BO93RwtQq0vQqz4MicZ0Bl7hzMltxkiVZyedIlqQfwwzIaiYeb44xMfo8VMhD6WseMht5uHAztzv5hnHmD9FnTi/g8hGQ2R1RUpT/Bf/5f8MDK2BPgAEA9mKNN2Mw9GEAAAAASUVORK5CYII=);
    }
    .product_icon, .deal_icon, .call_icon, .deadline_icon, .email_icon, .lunch_icon, .meeting_icon, .task_icon{
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        background-size: 20px 20px;
        height: 22px;
        background-repeat: no-repeat;
        padding-right: 5px;
    }
</style>
<script type="text/javascript">
    var deal_id; 
    var pers_id;
    var PipeDriveIntegration = Class.create();
    var pipeDrieDetails = {
        "api_token" : "PIPEDRIVE API HERE",  /* Api token of Pipedrive Crm to be inserted */
        "email" : "{{requester.email}}"

    }

    PipeDriveIntegration.prototype = {
        initialize : function(){
            var PipeDriveBundle = {
                domain: "https://api.pipedrive.com",
                ssl_enabled:true
            };
            this.api_token = pipeDrieDetails["api_token"];
            this.req_email = pipeDrieDetails["email"];
            this.freshdeskWidget = new Freshdesk.Widget(PipeDriveBundle);
        },
        startPipedrive : function(page_info){
            this.page_info = page_info;
            if(this.page_info === "tickets_page"){
                jQuery('#sample_pipedrive_integration').parent().parent().hide();
                if(!jQuery('#requester_info .tkt-tabs-wrap a[href="#contact_info_pipedrive_crm"]').length){
                    jQuery('#pipedrive_icon').wrap("<li></li>");
                    jQuery('a[href="#contact_info_default"]').parents('.tkt-tabs').append(jQuery('#pipedrive_icon').parent('li'));
                    jQuery('#requester_info .content').append(jQuery('#contact_info_pipedrive_crm'));
                }
            }else{
                jQuery('#contact_info_pipedrive_crm').show();
            }
            jQuery('.pipedrive_content').html('<div id="pipedrive_person_details"></div><div id="pipedrive_activities"></div><div id="pipedrive_deals"></div>');

            var pipedriveWidget = this;
            this.freshdeskWidget.request({
                rest_url : "v1/persons/find?term=" + this.req_email + "&start=0&search_by_email=1&api_token=" + this.api_token,
                method: "get",
                content_type: "application/json",
                on_success: function(data){
                    if(data.responseJSON.data){
                  

                        pipedriveWidget.getPersonsData(data.responseJSON.data[0].id);
                    }else{
                        jQuery('#deal-update').remove();
                        var default_html = '<div>No data found for this requester</div>';
                        pipedriveWidget.displayValues(default_html, "default");
                    }
                },
                on_failure: function(data){
                    // pipedriveWidget.handlefailure(data);
                }
            });

        },



        addPerson: function (callbackFunction) {
    if ( pers_id ==null) {
            var pipedriveWidget = this;
            var data = JSON.stringify({name:'{{ticket.requester.name}}' ,email: '{{ticket.from_email}}'}); 
        
            this.freshdeskWidget.request({
                rest_url : "v1/persons?api_token=" + this.api_token,
                method: "post",
                body: data,
                on_success: function(data){               
                     
                   pipedriveWidget.startPipedrive(pipedriveWidget.page_info);
                   new_pers_id = data.responseJSON.data.id;
                   callbackFunction();
                  
                },
                on_failure: function(data){
                    // pipedriveWidget.handlefailure(data);
                    console.log('no user created');
                }  
  }); 

  } else {        
   new_pers_id = pers_id;                  
    callbackFunction();
               }   
        },

        addDeal : function(){
          var pipedriveWidget = this;
          var freshdeskWidget = this.freshdeskWidget;
          var api_token = this.api_token;
        pipe_drive.addPerson(function()
            
            {       
  data = JSON.stringify({
                         title:'{{ticket.subject}}',
                         value:'{{ticket.deal_value}}',
                         currency:'AUD',
                         stage_id: '{{ticket.deal_stage}}',
                         status:'{{ticket.status}}',
                         person_id: new_pers_id,
                         c0aebf2b393f6989f724c7dc16186372758daa20:'{{ticket.agent.name}}',
                         b8a9d6430706944c44d8c8156377a7adb0bbd774:'{{ticket.booking_month}}',
                         bafabf96102d191fbd793252d552bd27fd562978:'{{ticket.booking_year}}',
                         cc12c1af7d52716dd1386787d296972617f44f33:'{{ticket.apartment}}',
                         bc87fad1b5ffadef14c6d568bfe66f9dcf1af87e:'{{ticket.id}}',
                        
                });

            freshdeskWidget.request({
                rest_url : "v1/deals?api_token=" + api_token,
                method: "post",
                body: data,
                on_success: function(data){
                    pipedriveWidget.startPipedrive(pipedriveWidget.page_info);
                },
                on_failure: function(data){
                    // pipedriveWidget.handlefailure(data);
                    console.log('Bad news');
                }
            });

            });
        },
        updateDeal : function(){
      

        switch('{{ticket.reason}}') {
    case 'BOOKED TO OTHER':
        status ='lost'
        break;
    case 'GUEST CIRCUMSTANCES CHANGED':
      status ='lost'
        break;
         case 'REQUESTED DATES UNAVAILABLE':
      status ='lost'
        break;
         case 'DATES EXPIRED':
      status ='lost'
        break;
         case 'UNRESPONSIVE':
      status ='lost'
        break;
        case 'UNRESPONSIVE':
      status ='lost'
        break;
        case 'WANTED PERMANENT':
      status ='lost'
        break;
          case 'PRICE TOO HIGH':
      status ='lost'
        break;
           case 'TIREKICKER':
      status ='lost'
        break;
    default: status ='open'
}   
            var pipedriveWidget = this;
            var  data = JSON.stringify({
                         title:'{{ticket.subject}}',
                         value:'{{ticket.deal_value}}',
                         currency:'AUD',
                         stage_id: '{{ticket.deal_stage}}',
                         status:status,
                         lost_reason: '{{ticket.reason}}',
                         c0aebf2b393f6989f724c7dc16186372758daa20:'{{ticket.agent.name}}',
                         b8a9d6430706944c44d8c8156377a7adb0bbd774:'{{ticket.booking_month}}',
                         bafabf96102d191fbd793252d552bd27fd562978:'{{ticket.booking_year}}',
                         cc12c1af7d52716dd1386787d296972617f44f33:'{{ticket.apartment}}',
                         bc87fad1b5ffadef14c6d568bfe66f9dcf1af87e:'{{ticket.id}}',
                        
                });
            this.freshdeskWidget.request({
                rest_url : "v1/deals/"+ deal_id +"?api_token=" + this.api_token,
                method: "put",
                body: data,
                on_success: function(data){
                    pipedriveWidget.startPipedrive(pipedriveWidget.page_info);
                },
                on_failure: function(data){
                    // pipedriveWidget.handlefailure(data);
                    console.log('Bad news');
                }
            });

        },

        getPersonsData : function(person_id){
            var pipedriveWidget = this;
            this.freshdeskWidget.request({
                rest_url : "v1/persons/" + person_id + "?api_token=" + this.api_token,
                method: "get",
                content_type: "application/json",
                on_success: function(data){
                    var person_html = '';
                    if(data.responseJSON.data){
                        person_html += '<div class="person_name"><a href="https://app.pipedrive.com/person/'+data.responseJSON.data.id+'">'+ data.responseJSON.data.name +'</a></div>';
                        if(data.responseJSON.data.org_id){
                            person_html += '<div class="organization_name"><a href="https://app.pipedrive.com/organization/'+data.responseJSON.data.org_id.value+'">'+ data.responseJSON.data.org_name +'</a></div>';
                        }
                        pipedriveWidget.displayValues(person_html, "persons");
                        pers_id = data.responseJSON.data.id;
                        pipedriveWidget.getActivites(data.responseJSON.data.id);
                        pipedriveWidget.getDeals(data.responseJSON.data.id);
                       
                    }
                },
                on_failure: function(data){
                    //pipedriveWidget.handlefailure(data);
                }
            });
        },
        getActivites : function(person_id){
            var pipedriveWidget = this;
            this.freshdeskWidget.request({
                rest_url : "v1/persons/" + person_id + "/activities?start=0&done=0&api_token=" + this.api_token,
                method: "get",
                content_type: "application/json",
                on_success: function(data){
                    if(data.responseJSON.data){
                        var activities_html = '<div class="activities_heading">Activities</div>';
                        var activities_array = data.responseJSON.data;
                        for(var count = 0; count < activities_array.length; count++){
                            activities_html += '<div class="activity_details"><div class="' + activities_array[count].type + '_icon"></div><span class="activity_subject">' + pipedriveWidget.capitalise(activities_array[count].type) + ' : ' + activities_array[count].subject ;
                            if(activities_array[count].due_date.length){
                                var due_date_time = new Date(activities_array[count].due_date +' '+ activities_array[count].due_time);
                                var date = due_date_time.toString("MMM dd yyyy");
                                var today_date = new Date();
                                var time = activities_array[count].due_time;
                                var tomorrow_date = new Date();
                                tomorrow_date.setDate(today_date.getDate() + 1);
                                if(date === today_date.toString("MMM dd yyyy")){
                                    date = "Today";
                                }else if(date === tomorrow_date.toString("MMM dd yyyy")){
                                    date = "Tomorrow";
                                }
                                if(time.length){
                                    time = " at " + due_date_time.toString("hh:mm tt");
                                }
                                activities_html += ', <span class="date_and_time">' + date + time + '</span>';
                            }
                            activities_html += '</span></div>';
                        }
                        pipedriveWidget.displayValues(activities_html, "activities");
                    }else{
                        jQuery('#pipedrive_activities').remove();
                    }
                },
                on_failure: function(data){
                    // pipedriveWidget.handlefailure(data);
                }
            });
        },


        getProducts : function(deals_array){
            var pipedriveWidget = this,
                    deals = [],
                    totalDeals = deals_array.length,
                    dealsProcessed = 0;
            if(totalDeals > 0){
                for(var i=0;i<totalDeals;i++){
                    var deal = deals_array[i];
                    var deal_id = deal.id;
                    (function (deal){
                        pipedriveWidget.freshdeskWidget.request({
                            method: "get",
                            entity_name: "request",
                            rest_url: "v1/deals/" + deal_id + "/products?start=0&api_token=" + pipedriveWidget.api_token,
                            body:"",
                            on_success: function(data){
                                dealsProcessed++;
                                var product_data = data.responseJSON.data,
                                        line_items = [],
                                        deal_date = new Date(deal.stage_change_time)
                                view_deal = null;
                                view_deal = {
                                    id: deal.id,
                                    name: deal.title,
                                    date: deal_date,
                                    value: deal.formatted_weighted_value
                                }
                                if(deal.status === "won"){
                                    view_deal.status = deal.status;
                                    view_deal.status_change = deal.won_time;
                                }else if(deal.status === "lost"){
                                    view_deal.status = deal.status;
                                    view_deal.status_change = deal.lost_time;
                                }
                                if(product_data){
                                    for(var j=0; j<product_data.length; j++) {
                                        var product = product_data[j];
                                        line_items.push({ id:product.id, title:product.name});
                                    }
                                    view_deal.line_items = line_items;
                                }

                                deals.push(view_deal);
                                if(dealsProcessed === totalDeals ) {
                                    var sorted_deals = deals.sort(function(obj1, obj2) {
                                        return obj1.date - obj2.date;
                                    });
                                    pipedriveWidget.renderDetails(sorted_deals);
                                }
                            }.bind(this),
                            on_failure: function(){
                                // pipedriveWidget.handlefailure(data);
                            }
                        });
                    })(deal);
                } //forloop
            }
        },

        renderDetails : function(sorted_deals){
            var pipedriveWidget = this;
            var deals_html = '<div class="deals_heading">Deals & Products</div>';
            for(var count = 0; count < sorted_deals.length; count++){
                deals_html += '<div class="deals_and_products">';
                deals_html += '<div class="deals_details"><div class="deal_icon"></div><span class="deal_name">' + sorted_deals[count].name;
                if(sorted_deals[count].line_items){
                    deals_html += ' (' + sorted_deals[count].line_items.length + ' products)';
                }
                deals_html += '</span>';
                if(sorted_deals[count].status){
                    var status_change_time = new Date(sorted_deals[count].status_change);
                    deals_html += '<div class="deal_status">' + pipedriveWidget.capitalise(sorted_deals[count].status) + ' ' + sorted_deals[count].value + ' on <span class="date_and_time">' + status_change_time.toString("MMM dd yyyy") + '</span></div>';
                }
                deals_html += '</div>';
                deals_html += '</div>';
            }
            pipedriveWidget.displayValues(deals_html,"deals_&_products");
        },

        getDeals : function(person_id){
            var pipedriveWidget = this;
            this.freshdeskWidget.request({
                rest_url : "v1/persons/" + person_id + "/deals?start=0&status=all_not_deleted&api_token=" + this.api_token,
                method: "get",
                content_type: "application/json",
                on_success: function(data){
                    if(data.responseJSON.data){
                        var deals_array = data.responseJSON.data;
                        deal_id = data.responseJSON.data[0].id;
                        pipedriveWidget.getProducts(deals_array);
                        jQuery('#deal').remove();
                    }else{
                        jQuery('#deal-update').remove();
                        jQuery('#pipedrive_deals').remove();
                    }
                },
                on_failure: function(data){
                
                }
            });
        },


        displayValues : function(value_html, value_type){
            if(value_html.length){
                switch(value_type) {
                    case "persons":
                        jQuery('#pipedrive_person_details').html(value_html);
                        break;
                    case "activities":
                        jQuery('#pipedrive_activities').html(value_html);
                        break;
                    case "deals_&_products":
                        jQuery('#pipedrive_deals').html(value_html);
                        break;
                    default :
                        jQuery('.pipedrive_content').empty();
                        jQuery('.pipedrive_content').html(value_html);
                }
            }
        },


        capitalise : function(value)
        {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }


    var pipe_drive = new PipeDriveIntegration();
    if(jQuery('body').hasClass('ticket_details')){
        jQuery(document).on("sidebar_loaded",function(event,data){
            if(!jQuery('a[href="#contact_info_default"]').length){
                jQuery('#requester_info .tkt-tabs-wrap').html('<ul class="tkt-tabs"><li><a href="#contact_info_default" class="requester-info-sprite requester-info-default"></a></li><ul>');
                jQuery(document).on('click', '#requester_info .tkt-tabs-wrap a', function(ev){
                    ev.preventDefault();
                    jQuery('#requester_info .tkt-tabs-wrap li').removeClass('active');
                    jQuery('#requester_info .requester_tab').hide();
                    jQuery(this).parent('li').addClass('active');
                    jQuery(jQuery(this).attr("href")).show();
                });
            }
            pipe_drive.startPipedrive('tickets_page');
        });
    }else{
        jQuery(document).ready(function(){
            pipe_drive.startPipedrive('contacts_page');
        });
    }
  
    jQuery("#deal").on("submit", function(event){
        event.preventDefault();
        if(this['name'].value !== ''){
            pipe_drive.addDeal();
        }
    });
      jQuery("#deal-update").on("submit", function(event){
        event.preventDefault();
        if(this['name'].value !== ''){
            pipe_drive.updateDeal();
        }
    });
 jQuery(document).on('ticket_fields_updated', function(ev, data) { 
 location.reload();
  });
</script>