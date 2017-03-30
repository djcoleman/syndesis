/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { RequestOptions, BaseRequestOptions, Http } from '@angular/http';
import { RestangularModule } from 'ng2-restangular';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ModalModule } from 'ng2-bootstrap/modal';
import { ToasterModule } from 'angular2-toaster';

import { IPaaSCommonModule } from '../common/common.module';
import { DashboardComponent } from './dashboard.component';
import { EmptyStateComponent } from './emptystate.component';
//import { PopularTemplatesComponent } from './populartemplates.component';
//import { TemplatesListComponent } from '../templates/list/list.component';
import { DashboardConnectionsComponent } from './connections.component';
import { DashboardIntegrationsComponent } from './integrations.component';
import { StoreModule } from '../store/store.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IPaaSCommonModule,
        ChartsModule,
        ModalModule,
        ToasterModule,
        StoreModule,
        RouterTestingModule.withRoutes([]),
        RestangularModule.forRoot(),
      ],
      declarations: [
        DashboardComponent,
        EmptyStateComponent,
        DashboardConnectionsComponent,
        DashboardIntegrationsComponent,
      ],
      providers: [
        MockBackend,
        { provide: RequestOptions, useClass: BaseRequestOptions },
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          }, deps: [MockBackend, RequestOptions],
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
